using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record ChannelNamespace
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiId")]
    public string? ApiId { get; init; }

    /// <summary>
    /// The name of the channel namespace. This name must be unique within the Api.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscribeAuthModes")]
    public IReadOnlyList<AuthMode>? SubscribeAuthModes { get; init; }

    /// <summary>
    /// The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default Apiauthorization configuration.
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

    /// <summary>
    /// The Amazon Resource Name (ARN) for the ChannelNamespace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channelNamespaceArn")]
    public string? ChannelNamespaceArn { get; init; }

    /// <summary>
    /// The date and time that the ChannelNamespace was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public DateTimeOffset? Created { get; init; }

    /// <summary>
    /// The date and time that the ChannelNamespace was last changed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModified")]
    public DateTimeOffset? LastModified { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handlerConfigs")]
    public HandlerConfigs? HandlerConfigs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
