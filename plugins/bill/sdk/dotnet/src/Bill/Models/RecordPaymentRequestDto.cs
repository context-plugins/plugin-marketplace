using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Record AP payment
/// </summary>
public record RecordPaymentRequestDto
{
    /// <summary>
    /// BILL-generated ID of the vendor. The value begins with <c>009</c>.
    /// </summary>
    [JsonPropertyName("vendorId")]
    [MinLength(1)]
    public required string VendorId { get; init; }

    /// <summary>
    /// Payment process date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonPropertyName("processDate")]
    public required DateTimeOffset ProcessDate { get; init; }

    /// <summary>
    /// Set as <c>true</c> to set the payment check as printable in your accounting system. Use this field only for check payments.
    /// </summary>
    [JsonPropertyName("toPrintCheck")]
    public required bool ToPrintCheck { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications? Classifications { get; init; }

    /// <summary>
    /// Payment description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Payment reference ID in your accounting system. Set this field with payment information, such as check number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncReference")]
    public string? SyncReference { get; init; }

    /// <summary>
    /// List of bill payments
    /// </summary>
    [JsonPropertyName("payments")]
    [MinLength(1)]
    public required IReadOnlyList<RecordBillPayRequestDto> Payments { get; init; }

    /// <summary>
    /// Set as <c>true</c> to sync the bill payment with your accounting system
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowExport")]
    public bool? AllowExport { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
