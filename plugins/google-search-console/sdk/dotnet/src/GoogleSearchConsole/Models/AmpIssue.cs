using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;
using GoogleSearchConsole.Models.Enums;

namespace GoogleSearchConsole.Models;

/// <summary>
/// AMP issue.
/// </summary>
public record AmpIssue
{
    /// <summary>
    /// Severity of this issue: WARNING or ERROR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public Severity2? Severity { get; init; }

    /// <summary>
    /// Brief description of this issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issueMessage")]
    public string? IssueMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
