using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record VersionModel
{
    /// <summary>
    /// Contract version number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public int? Version { get; init; }

    /// <summary>
    /// Version status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveStart")]
    public DateTimeOffset? EffectiveStart { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveEnd")]
    public DateTimeOffset? EffectiveEnd { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renewalPolicy")]
    public string? RenewalPolicy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancellationReason")]
    public string? CancellationReason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingProfile")]
    public object? BillingProfile { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoicesEmail")]
    [Format(FormatKind.Email)]
    public string? InvoicesEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contractUpdatesEmail")]
    [Format(FormatKind.Email)]
    public string? ContractUpdatesEmail { get; init; }

    /// <summary>
    /// Whether DoiT generates invoices for this contract.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doitInvoicingEnabled")]
    public bool? DoitInvoicingEnabled { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
