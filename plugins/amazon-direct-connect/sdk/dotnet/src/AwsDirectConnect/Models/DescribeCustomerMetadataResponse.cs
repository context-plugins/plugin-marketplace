using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DescribeCustomerMetadataResponse
{
    /// <summary>
    /// The list of customer agreements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agreements")]
    public IReadOnlyList<CustomerAgreement>? Agreements { get; init; }

    /// <summary>
    /// The type of network-to-network interface (NNI) partner. The partner type will be one of the following: V1: This partner can only allocate 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps subgigabit connections. V2: This partner can only allocate 1GB, 2GB, 5GB, or 10GB hosted connections. nonPartner: The customer is not a partner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nniPartnerType")]
    public NniPartnerType? NniPartnerType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
