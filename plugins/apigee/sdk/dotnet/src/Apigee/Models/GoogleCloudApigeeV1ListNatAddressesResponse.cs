using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListNatAddresses.
/// </summary>
public record GoogleCloudApigeeV1ListNatAddressesResponse
{
    /// <summary>
    /// List of NAT Addresses for the instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("natAddresses")]
    public IReadOnlyList<GoogleCloudApigeeV1NatAddress>? NatAddresses { get; init; }

    /// <summary>
    /// Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
