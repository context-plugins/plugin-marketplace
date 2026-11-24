using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Models.Enums;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// A S3 compatible metadata.
/// </summary>
public record S3CompatibleMetadata2
{
    /// <summary>
    /// Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestModel")]
    public RequestModel? RequestModel { get; init; }

    /// <summary>
    /// Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocol")]
    public Protocol? Protocol { get; init; }

    /// <summary>
    /// Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authMethod")]
    public AuthMethod? AuthMethod { get; init; }

    /// <summary>
    /// The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listApi")]
    public ListApi? ListApi { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
