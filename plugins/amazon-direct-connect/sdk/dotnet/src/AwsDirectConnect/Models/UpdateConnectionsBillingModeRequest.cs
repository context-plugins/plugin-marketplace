using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record UpdateConnectionsBillingModeRequest
{
    /// <summary>
    /// The IDs of the connections to update. You can specify from 1 to 200 connections.
    /// </summary>
    [JsonPropertyName("connectionIds")]
    public required IReadOnlyList<string> ConnectionIds { get; init; }

    /// <summary>
    /// The billing mode to apply to the specified connections. The valid values are PayAsYouGo, FlatRateTier1, FlatRateTier2, FlatRateTier3, FlatRateTier4, and FlatRateTier5.
    /// </summary>
    [JsonPropertyName("billingMode")]
    public required BillingMode1AwsDirectConnectOperationsApi BillingMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
