using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record AttachmentPaymentHistorySimple
{
    /// <summary>
    /// Unique name / number to identify the specific customer account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique_account_identifier")]
    public string? UniqueAccountIdentifier { get; init; }

    /// <summary>
    /// Whether the customer has paid before or not
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paid_before_flag")]
    public bool? PaidBeforeFlag { get; init; }

    /// <summary>
    /// ISO 8601 date e.g. 2018-10-17
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_of_last_paid_purchase")]
    public DateTimeOffset? DateOfLastPaidPurchase { get; init; }

    /// <summary>
    /// ISO 8601 date e.g. 2018-10-17
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_of_first_paid_purchase")]
    public DateTimeOffset? DateOfFirstPaidPurchase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
