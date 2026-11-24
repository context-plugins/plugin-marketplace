using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// User subscription status response object
/// </summary>
public record AppUserSubscriptionStatusResponse
{
    /// <summary>
    /// Response metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public ResponseMeta? Meta { get; init; }

    /// <summary>
    /// An object describes subscription status related to user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data2? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
