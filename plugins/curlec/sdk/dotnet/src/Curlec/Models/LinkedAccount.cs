using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// A sub-merchant (Linked Account) created under a Route marketplace account. Linked Accounts can receive transfers and settlements. Prefix: acc_
/// </summary>
public record LinkedAccount
{
    /// <summary>
    /// Account ID. Prefix: acc_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Account type. Always 'route' for Route marketplace accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeRazorpayLinkedAccountsApi? Type { get; init; }

    /// <summary>
    /// Account status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusRazorpayLinkedAccountsApi? Status { get; init; }

    /// <summary>
    /// Contact email. Cannot be updated after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Contact phone number with country code (e.g., +919876543210).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// Registered legal name of the business.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legal_business_name")]
    public string? LegalBusinessName { get; init; }

    /// <summary>
    /// Business type. Cannot be updated after creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_type")]
    public BusinessTypeRazorpayLinkedAccountsApi? BusinessType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile")]
    public Profile? Profile { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legal_info")]
    public LegalInfo? LegalInfo { get; init; }

    /// <summary>
    /// Name of the primary contact person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_name")]
    public string? ContactName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_info")]
    public ContactInfo? ContactInfo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apps")]
    public Apps? Apps { get; init; }

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
