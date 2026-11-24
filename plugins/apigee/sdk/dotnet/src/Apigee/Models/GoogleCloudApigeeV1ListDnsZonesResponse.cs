using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for list DNS zones.
/// </summary>
public record GoogleCloudApigeeV1ListDnsZonesResponse
{
    /// <summary>
    /// DNS zones in a given organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dnsZones")]
    public IReadOnlyList<GoogleCloudApigeeV1DnsZone>? DnsZones { get; init; }

    /// <summary>
    /// Page token that you can include in an <c>ListDnsZones</c> request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
