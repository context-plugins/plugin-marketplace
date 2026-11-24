using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Charge a customer
/// </summary>
public record ChargeCustomerRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("fundingAccount")]
    public required FundingAccount2 FundingAccount { get; init; }

    /// <summary>
    /// Invoice payment description. This value is included in the check memo or in the bank descriptor for electronic payments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Received payment date. Funds are withdrawn from the customer bank account on this date.This value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentDate")]
    public DateTimeOffset? PaymentDate { get; init; }

    /// <summary>
    /// List of invoices to be paid
    /// </summary>
    [JsonPropertyName("invoicePayments")]
    public required IReadOnlyList<InvoicePayRequestDto> InvoicePayments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
