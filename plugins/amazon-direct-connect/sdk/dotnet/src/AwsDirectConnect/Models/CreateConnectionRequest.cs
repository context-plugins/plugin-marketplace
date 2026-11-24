using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record CreateConnectionRequest
{
    /// <summary>
    /// The location of the connection.
    /// </summary>
    [JsonPropertyName("location")]
    public required string Location { get; init; }

    /// <summary>
    /// The bandwidth of the connection.
    /// </summary>
    [JsonPropertyName("bandwidth")]
    public required string Bandwidth { get; init; }

    /// <summary>
    /// The name of the connection.
    /// </summary>
    [JsonPropertyName("connectionName")]
    public required string ConnectionName { get; init; }

    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagId")]
    public string? LagId { get; init; }

    /// <summary>
    /// The tags to associate with the lag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the requested connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is unavailable on hosted connections. For information about MAC Security (MACsec) prerequisites, see MAC Security in Direct Connect in the Direct Connect User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestMACSec")]
    public bool? RequestMacSec { get; init; }

    /// <summary>
    /// The billing mode for the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMode")]
    public BillingMode2? BillingMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
