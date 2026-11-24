using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Describes the customer-managed encryption key (CMEK) configuration associated with a project and location.
/// </summary>
public record CmekConfig
{
    /// <summary>
    /// Output only. The config resource name which includes the project and location and must end in 'cmekConfig', in the format <c>projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Resource name of the Cloud KMS key, of the form <c>projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID</c>, that will be used to encrypt the Queues &amp; Tasks in the region. Setting this as blank will turn off CMEK encryption.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKey")]
    public string? KmsKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
