using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Core.Validation;
using Paid.Core.Validation.Attributes;

namespace Paid.Models;

public record CreateCustomerPortalRequest
{
    /// <summary>
    /// The Paid customer ID (display ID or UUID). Either this or externalCustomerId must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Your external customer ID. Either this or customerId must be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalCustomerId")]
    public string? ExternalCustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnUrl")]
    [Format(FormatKind.Uri)]
    public string? ReturnUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
