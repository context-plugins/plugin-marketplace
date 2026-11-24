using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (<c>.tsv</c>/<c>.csv</c>): Two column file, tab- or comma-separated. The first column is source text. The second column is target text. No headers in this file. The first row contains data and not column names. - TMX (<c>.tmx</c>): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (<c>.csv</c>): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - <see href="https://cloud.google.com/translate/docs/advanced/glossary">glossaries</see>.
/// </summary>
public record GcsSource3
{
    /// <summary>
    /// Required. Source data URI. For example, <c>gs://my_bucket/my_object</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputUri")]
    public string? InputUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
