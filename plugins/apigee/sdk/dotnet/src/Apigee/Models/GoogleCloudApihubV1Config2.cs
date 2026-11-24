using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Required. Config of the ApiHub instance.
/// </summary>
public record GoogleCloudApihubV1Config2
{
    /// <summary>
    /// Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentRegistrySyncConfig")]
    public GoogleCloudApihubV1AgentRegistrySyncConfig1? AgentRegistrySyncConfig { get; init; }

    /// <summary>
    /// Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If no encryption type is provided, GMEK will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionType")]
    public EncryptionType? EncryptionType { get; init; }

    /// <summary>
    /// Optional. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of <c>projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)</c>, where the location must match the instance location. If the CMEK is not provided, a GMEK will be created for the instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cmekKeyName")]
    public string? CmekKeyName { get; init; }

    /// <summary>
    /// Optional. The name of the Vertex AI location where the data store is stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vertexLocation")]
    public string? VertexLocation { get; init; }

    /// <summary>
    /// Optional. If true, the search will be disabled for the instance. The default value is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableSearch")]
    public bool? DisableSearch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
