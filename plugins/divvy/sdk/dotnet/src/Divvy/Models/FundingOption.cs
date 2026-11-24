using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Funding option.
/// </summary>
public record FundingOption
{
    /// <summary>
    /// This field is set as <c>true</c> if the funding account is available for vendor payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("available")]
    public bool? Available { get; init; }

    /// <summary>
    /// Vendor payment delivery date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deliveryDate")]
    public DateTimeOffset? DeliveryDate { get; init; }

    /// <summary>
    /// Vendor payment process date. The value is in the <c>yyyy-MM-dd</c> format. On this date, BILL starts processing the payment and starts withdrawing funds from the sender's funding account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processDate")]
    public DateTimeOffset? ProcessDate { get; init; }

    /// <summary>
    /// Reason why the funding account is not available for vendor payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Additional information required for vendor payments with the funding account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditions")]
    public IReadOnlyList<string>? Conditions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
