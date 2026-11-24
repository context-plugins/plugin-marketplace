using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record EntityInvoiceExplainer
{
    [JsonPropertyName("summary")]
    public required BillingExplainerSummary Summary { get; init; }

    [JsonPropertyName("service")]
    public required IReadOnlyDictionary<string, BillingExplainerProviderCosts> Service { get; init; }

    [JsonPropertyName("account")]
    public required IReadOnlyDictionary<string, BillingExplainerProviderCosts> Account { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("billingProfileId")]
    public required string BillingProfileId { get; init; }

    [JsonPropertyName("invoiceNumber")]
    public required string InvoiceNumber { get; init; }

    [JsonPropertyName("invoiceMonth")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string InvoiceMonth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
