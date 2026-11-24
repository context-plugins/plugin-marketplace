using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A request to inject credentials into a cluster.
/// </summary>
public record InjectCredentialsRequest
{
    /// <summary>
    /// Required. The cluster UUID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterUuid")]
    public string? ClusterUuid { get; init; }

    /// <summary>
    /// Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentialsCiphertext")]
    public string? CredentialsCiphertext { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
