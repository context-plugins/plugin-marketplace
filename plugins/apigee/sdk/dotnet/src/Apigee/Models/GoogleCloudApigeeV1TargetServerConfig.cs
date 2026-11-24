using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

public record GoogleCloudApigeeV1TargetServerConfig
{
    /// <summary>
    /// Port number for the target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// Target server revision name in the following format: <c>organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The protocol used by this target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocol")]
    public Protocol1? Protocol { get; init; }

    /// <summary>
    /// Host name of the target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    /// <summary>
    /// TLS settings for the target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tlsInfo")]
    public GoogleCloudApigeeV1TlsInfoConfig1? TlsInfo { get; init; }

    /// <summary>
    /// Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
