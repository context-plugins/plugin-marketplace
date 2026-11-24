using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
/// </summary>
public record GoogleCloudApigeeV1TargetServer
{
    /// <summary>
    /// Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// Required. The resource id of this target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isEnabled")]
    public bool? IsEnabled { get; init; }

    /// <summary>
    /// Optional. Specifies TLS configuration info for this TargetServer. The JSON name is <c>sSLInfo</c> for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sSLInfo")]
    public GoogleCloudApigeeV1TlsInfo1? SSlInfo { get; init; }

    /// <summary>
    /// Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    /// <summary>
    /// Immutable. The protocol used by this TargetServer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocol")]
    public Protocol? Protocol { get; init; }

    /// <summary>
    /// Optional. A human-readable description of this TargetServer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
