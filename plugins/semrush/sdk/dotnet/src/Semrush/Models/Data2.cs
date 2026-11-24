using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// An object describes subscription status related to user
/// </summary>
public record Data2
{
    /// <summary>
    /// Does user subscribed on requested subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
