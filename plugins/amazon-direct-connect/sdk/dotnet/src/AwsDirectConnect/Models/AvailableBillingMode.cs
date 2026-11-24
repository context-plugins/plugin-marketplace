using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record AvailableBillingMode
{
    /// <summary>
    /// The billing mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMode")]
    public BillingMode? BillingMode { get; init; }

    /// <summary>
    /// The port speeds available for the billing mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("availablePortSpeeds")]
    public IReadOnlyList<string>? AvailablePortSpeeds { get; init; }

    /// <summary>
    /// The Amazon Web Services Regions included with the billing mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedRegions")]
    public IReadOnlyList<string>? IncludedRegions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
