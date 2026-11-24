using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerCustomer
{
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonPropertyName("invoiceMonth")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string InvoiceMonth { get; init; }

    [JsonPropertyName("updateTime")]
    public required DateTimeOffset UpdateTime { get; init; }

    [JsonPropertyName("payers")]
    public required IReadOnlyDictionary<string, BillingExplainerPayer> Payers { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("doitCredits")]
    public required BillingExplainerMoney DoitCredits { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("invoiceAdjustments")]
    public required BillingExplainerMoney InvoiceAdjustments { get; init; }
}
