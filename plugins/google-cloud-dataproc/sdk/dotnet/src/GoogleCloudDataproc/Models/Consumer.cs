using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Contains information of the customer's network configurations.
/// </summary>
public record Consumer
{
    /// <summary>
    /// Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointLocation")]
    public string? EndpointLocation { get; init; }

    /// <summary>
    /// Output only. The URI of the endpoint used to access the metastore service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointUri")]
    public string? EndpointUri { get; init; }

    /// <summary>
    /// Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetwork")]
    public string? Subnetwork { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
