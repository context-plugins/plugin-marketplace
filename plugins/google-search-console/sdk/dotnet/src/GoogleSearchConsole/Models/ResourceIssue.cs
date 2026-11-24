using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Models;

/// <summary>
/// Information about a resource with issue.
/// </summary>
public record ResourceIssue
{
    /// <summary>
    /// Describes a blocked resource issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockedResource")]
    public BlockedResource1? BlockedResource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
