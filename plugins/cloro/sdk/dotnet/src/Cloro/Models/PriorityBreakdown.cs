using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record PriorityBreakdown
{
    /// <summary>
    /// The priority level (1-10).
    /// </summary>
    [JsonPropertyName("priority")]
    [Minimum(1)]
    [Maximum(10)]
    public required int Priority { get; init; }

    /// <summary>
    /// Number of queued tasks at this priority level.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
