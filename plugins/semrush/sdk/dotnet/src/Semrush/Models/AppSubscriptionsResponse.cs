using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// Available subscriptions response object
/// </summary>
public record AppSubscriptionsResponse
{
    /// <summary>
    /// Response metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public ResponseMeta? Meta { get; init; }

    /// <summary>
    /// An object describes all app subscriptions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data1? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
