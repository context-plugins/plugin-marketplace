using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;
using GoogleCloudApiGateway.Models.Enums;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.
/// </summary>
public record ApigatewayGateway
{
    /// <summary>
    /// Output only. Created time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The default hostname that serves traffic for this Gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultHostname")]
    public string? DefaultHostname { get; init; }

    /// <summary>
    /// Identifier. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Updated time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiConfig")]
    public string? ApiConfig { get; init; }

    /// <summary>
    /// Output only. The streaming mode this gateway is actually served with, which the service resolves at creation from <c>streaming_mode</c>, the referenced API Config, and the platform default at the time. Read this rather than <c>streaming_mode</c> to determine whether a gateway supports streaming.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveStreamingMode")]
    public EffectiveStreamingMode? EffectiveStreamingMode { get; init; }

    /// <summary>
    /// Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is rejected. If unset, the service selects the mode. This field records only what was requested and is never modified by the service; read <c>effective_streaming_mode</c> for the mode the gateway is served with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamingMode")]
    public StreamingMode? StreamingMode { get; init; }

    /// <summary>
    /// Output only. The current state of the Gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
