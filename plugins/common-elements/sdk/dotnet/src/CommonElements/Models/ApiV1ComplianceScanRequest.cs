using System.Text.Json.Serialization;

namespace CommonElements.Models;

public record ApiV1ComplianceScanRequest
{
    /// <summary>
    /// The full text of the governing document to analyze.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Two-letter state code (e.g. "FL", "GA").
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// Optional. One of: "governing_document" (default), "cc_and_rs", "bylaws", "articles", "rules_and_regulations".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doc_type")]
    public string? DocType { get; init; }
}
