using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

/// <summary>
/// Present only when the request sent return_usage: true. characters is the billable character count the request submitted; see the return_usage request field for the exact semantics.
/// </summary>
public record Usage
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("characters")]
    public int? Characters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
