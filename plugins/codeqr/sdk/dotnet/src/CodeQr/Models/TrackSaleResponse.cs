using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record TrackSaleResponse
{
    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("paymentProcessor")]
    public required string PaymentProcessor { get; init; }

    [JsonPropertyName("invoiceId")]
    public required string? InvoiceId { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("metadata")]
    public required IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
