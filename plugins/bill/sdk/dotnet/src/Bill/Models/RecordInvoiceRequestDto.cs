using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Record AR payment
/// </summary>
public record RecordInvoiceRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Invoice payment date. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonPropertyName("paymentDate")]
    public required DateTimeOffset PaymentDate { get; init; }

    [JsonPropertyName("paymentType")]
    public required InvoicePaymentTypeRequest PaymentType { get; init; }

    /// <summary>
    /// Payment amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// Payment description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// List of invoice payments
    /// </summary>
    [JsonPropertyName("invoices")]
    public required IReadOnlyList<RecordInvoiceItemRequestDto> Invoices { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
