using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// BillingStatement response Dto.
/// </summary>
public record BillingStatementResponseDto
{
    /// <summary>
    /// BILL-generated ID of the billing statement. The value begins with <c>0S0</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Billing invoice number
    /// </summary>
    [JsonPropertyName("invoiceNumber")]
    public required string InvoiceNumber { get; init; }

    /// <summary>
    /// Billing invoice date
    /// </summary>
    [JsonPropertyName("invoiceDate")]
    public required DateTimeOffset InvoiceDate { get; init; }

    /// <summary>
    /// Billing invoice description
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("billingPeriod")]
    public required BillingPeriod BillingPeriod { get; init; }

    [JsonPropertyName("paymentStatus")]
    public required BillingStatementPaymentStatus PaymentStatus { get; init; }

    /// <summary>
    /// Billing invoice payment date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentDate")]
    public DateTimeOffset? PaymentDate { get; init; }

    /// <summary>
    /// Billing invoice amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
