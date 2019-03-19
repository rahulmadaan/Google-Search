const setProperty = function(element, key, value) {
  element[key] = value;
};

const parseGoogleResults = function(query, results) {
  const color = "#2eb886";
  const totalResults = results.length;
  const LAST_SECOND_ELEMENT = totalResults - 2;
  const attachments = [];

  results.map(result => {
    let attachment = {};
    if (result == results[0]) {
      attachment.pretext = query;
    }
    if (result == results[LAST_SECOND_ELEMENT]) {
      // last element is null
      attachment.footer = "Google Search";
    }
    const set = setProperty.bind(null, attachment);
    set("color", color);
    set("title", result.title);
    set("title_link", result.link);
    set("text", result.description);
    attachments.push(attachment);
    attachment = {};
  });

  const parsedResult = { attachments };
  return parsedResult;
};

module.exports = parseGoogleResults;
