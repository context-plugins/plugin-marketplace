using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Result of the Rich Results analysis. Absent if there are no rich results found.
/// </summary>
public record RichResultsInspectionResult2
{
    /// <summary>
    /// High-level rich results inspection result for this URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict")]
    public Verdict3? Verdict { get; init; }

    /// <summary>
    /// A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectedItems")]
    public IReadOnlyList<DetectedItems>? DetectedItems { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
