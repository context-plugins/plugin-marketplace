using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each payment creates a BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_
/// </summary>
public record VirtualAccount
{
    /// <summary>
    /// Virtual account ID. Prefix: va_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Display name of the virtual account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public EntityRazorpayVirtualAccountsApi? Entity { get; init; }

    /// <summary>
    /// Purpose or description of the virtual account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Expected payment amount in paise. 0 means any amount is accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_expected")]
    public int? AmountExpected { get; init; }

    /// <summary>
    /// Total amount received so far in paise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount_paid")]
    public int? AmountPaid { get; init; }

    /// <summary>
    /// active = accepting payments; closed = no longer accepting payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusRazorpayVirtualAccountsApi? Status { get; init; }

    /// <summary>
    /// Payment receivers assigned to this virtual account. Can include bank_account (ba_*) and/or vpa (vpa_*) receivers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivers")]
    public IReadOnlyList<Receiver>? Receivers { get; init; }

    /// <summary>
    /// Unix timestamp by which the account will auto-close. Maximum value: 2147483647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_by")]
    public int? CloseBy { get; init; }

    /// <summary>
    /// Unix timestamp when the account was closed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closed_at")]
    public int? ClosedAt { get; init; }

    /// <summary>
    /// Customer ID linked to this virtual account (cust_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public int? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
