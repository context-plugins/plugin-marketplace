using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record MtsContractCreateInput
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonPropertyName("renewalPolicy")]
    public required RenewalPolicy1 RenewalPolicy { get; init; }

    /// <summary>
    /// Whether DoiT generates invoices for this contract. Disabling suppresses invoice generation from that point forward while billing calculations and pipeline outputs continue. Omitting the field leaves invoicing enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doitInvoicingEnabled")]
    public bool? DoitInvoicingEnabled { get; init; } = true;

    /// <summary>
    /// Required for an end-customer contract with doitInvoicingEnabled set to true; optional otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoicesEmail")]
    [Format(FormatKind.Email)]
    public string? InvoicesEmail { get; init; }

    /// <summary>
    /// Required for an end-customer contract with doitInvoicingEnabled set to true; optional otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contractUpdatesEmail")]
    [Format(FormatKind.Email)]
    public string? ContractUpdatesEmail { get; init; }

    /// <summary>
    /// The billing profile (name, country, state, city, address, zip). Required for an end-customer contract with doitInvoicingEnabled set to true; optional otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingProfile")]
    public object? BillingProfile { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managementAccounts")]
    public IReadOnlyList<string>? ManagementAccounts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingRules")]
    public IReadOnlyList<object>? BillingRules { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("priceBooks")]
    public IReadOnlyList<object>? PriceBooks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customLineItems")]
    public IReadOnlyList<object>? CustomLineItems { get; init; }

    /// <summary>
    /// ID of a contract template owned by the authenticated tenant. When specified, the template's billing rules, price books, and custom line items are copied onto the new contract. Mutually exclusive with billingRules, priceBooks, and customLineItems in the request body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateId")]
    public string? TemplateId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
