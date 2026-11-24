using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Input configuration for BatchTranslateText request.
/// </summary>
public record InputConfig
{
    /// <summary>
    /// Optional. Can be "text/plain" or "text/html". For <c>.tsv</c>, "text/html" is used if mime_type is missing. For <c>.html</c>, this field must be "text/html" or empty. For <c>.txt</c>, this field must be "text/plain" or empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Required. Google Cloud Storage location for the source input. This can be a single file (for example, <c>gs://translation-test/input.tsv</c>) or a wildcard (for example, <c>gs://translation-test/*</c>). If a file extension is <c>.tsv</c>, it can contain either one or two columns. The first column (optional) is the id of the text request. If the first column is missing, we use the row number (0-based) from the input file as the ID in the output file. The second column is the actual text to be translated. We recommend each row be &lt;= 10K Unicode codepoints, otherwise an error might be returned. Note that the input tsv must be RFC 4180 compliant. You could use https://github.com/Clever/csvlint to check potential formatting errors in your tsv file. csvlint --delimiter='\t' your_input_file.tsv The other supported file extensions are <c>.txt</c> or <c>.html</c>, which is treated as a single large chunk of text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsSource")]
    public GcsSource5? GcsSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
