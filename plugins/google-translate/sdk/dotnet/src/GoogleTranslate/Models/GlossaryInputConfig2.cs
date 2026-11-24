using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.
/// </summary>
public record GlossaryInputConfig2
{
    /// <summary>
    /// Required. Google Cloud Storage location of glossary data. File format is determined based on the filename extension. API returns [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file formats. Wildcards are not allowed. This must be a single file in one of the following formats: For unidirectional glossaries: - TSV/CSV (<c>.tsv</c>/<c>.csv</c>): Two column file, tab- or comma-separated. The first column is source text. The second column is target text. No headers in this file. The first row contains data and not column names. - TMX (<c>.tmx</c>): TMX file with parallel data defining source/target term pairs. For equivalent term sets glossaries: - CSV (<c>.csv</c>): Multi-column CSV file defining equivalent glossary terms in multiple languages. See documentation for more information - <see href="https://cloud.google.com/translate/docs/advanced/glossary">glossaries</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsSource")]
    public GcsSource3? GcsSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
