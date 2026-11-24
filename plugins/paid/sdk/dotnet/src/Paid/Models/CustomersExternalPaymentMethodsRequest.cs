using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomersExternalPaymentMethodsRequest
{
    /// <summary>
    /// Stripe confirmation token for the payment method
    /// </summary>
    [JsonPropertyName("confirmationToken")]
    public required string ConfirmationToken { get; init; }

    /// <summary>
    /// URL to redirect to after payment method setup
    /// </summary>
    [JsonPropertyName("returnUrl")]
    public required string ReturnUrl { get; init; }

    /// <summary>
    /// Optional metadata to attach to the payment method
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
