using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record InvoiceLine
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("orderId")]
    public required string? OrderId { get; init; }

    [JsonPropertyName("orderLineId")]
    public required string? OrderLineId { get; init; }

    [JsonPropertyName("orderLineAttributeId")]
    public required string? OrderLineAttributeId { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonPropertyName("endDate")]
    public required DateTimeOffset EndDate { get; init; }

    [JsonPropertyName("paymentStatus")]
    public required InvoiceLinePaymentStatus PaymentStatus { get; init; }

    [JsonPropertyName("quantity")]
    public required int Quantity { get; init; }

    [JsonPropertyName("totalPriceBeforeTax")]
    public required double TotalPriceBeforeTax { get; init; }

    [JsonPropertyName("tax")]
    public required double Tax { get; init; }

    [JsonPropertyName("taxRate")]
    public required double TaxRate { get; init; }

    [JsonPropertyName("totalPriceAfterTax")]
    public required double TotalPriceAfterTax { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("balanceAmount")]
    public required double BalanceAmount { get; init; }

    [JsonPropertyName("creditedAmount")]
    public required double CreditedAmount { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
