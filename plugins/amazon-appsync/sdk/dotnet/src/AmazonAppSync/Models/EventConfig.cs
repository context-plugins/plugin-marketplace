using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record EventConfig
{
    /// <summary>
    /// A list of authorization providers.
    /// </summary>
    [JsonPropertyName("authProviders")]
    public required IReadOnlyList<AuthProvider> AuthProviders { get; init; }

    /// <summary>
    /// A list of valid authorization modes for the Event API connections.
    /// </summary>
    [JsonPropertyName("connectionAuthModes")]
    public required IReadOnlyList<AuthMode> ConnectionAuthModes { get; init; }

    /// <summary>
    /// A list of valid authorization modes for the Event API publishing.
    /// </summary>
    [JsonPropertyName("defaultPublishAuthModes")]
    public required IReadOnlyList<AuthMode> DefaultPublishAuthModes { get; init; }

    /// <summary>
    /// A list of valid authorization modes for the Event API subscriptions.
    /// </summary>
    [JsonPropertyName("defaultSubscribeAuthModes")]
    public required IReadOnlyList<AuthMode> DefaultSubscribeAuthModes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logConfig")]
    public EventLogConfig? LogConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
