using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Vendor Direct (VCARD) information.
/// </summary>
public record VirtualCardBillV3VendorsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public VirtualCardStatus? Status { get; init; }

    /// <summary>
    /// Virtual card remittance email address set for the vendor
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remitEmail")]
    public string? RemitEmail { get; init; }

    /// <summary>
    /// Virtual card enrollment date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrollDate")]
    public DateTimeOffset? EnrollDate { get; init; }

    /// <summary>
    /// Virtual card declined date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("declineDate")]
    public DateTimeOffset? DeclineDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternatePayByType")]
    public DisbursementType? AlternatePayByType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
