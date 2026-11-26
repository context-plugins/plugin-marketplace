using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Card Funding option.
/// </summary>
public record CardFundingOption
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

    /// <summary>
    /// BILL-generated ID of the card account. The value begins with <c>cat</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Card account name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Card brand
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public string? Brand { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feeInfo")]
    public FeeInfo? FeeInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
