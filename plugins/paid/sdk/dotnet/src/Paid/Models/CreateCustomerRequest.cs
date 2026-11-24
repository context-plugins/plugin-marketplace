using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreateCustomerRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legalName")]
    public string? LegalName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingAddress")]
    public CustomerBillingAddressInput? BillingAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationState")]
    public CustomerCreationState? CreationState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vatNumber")]
    public string? VatNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultCurrency")]
    public string? DefaultCurrency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
