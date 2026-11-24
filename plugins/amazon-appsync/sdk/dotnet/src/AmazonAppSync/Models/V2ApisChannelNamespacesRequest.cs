using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V2ApisChannelNamespacesRequest
{
    /// <summary>
    /// The name of the ChannelNamespace. This name must be unique within the Api
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default Api authorization configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscribeAuthModes")]
    public IReadOnlyList<AuthMode>? SubscribeAuthModes { get; init; }

    /// <summary>
    /// The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default Api authorization configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishAuthModes")]
    public IReadOnlyList<AuthMode>? PublishAuthModes { get; init; }

    /// <summary>
    /// The event handler functions that run custom business logic to process published events and subscribe requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codeHandlers")]
    public string? CodeHandlers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handlerConfigs")]
    public HandlerConfigs? HandlerConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
