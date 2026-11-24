using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record OrdersActivateAndPayRequest
{
    /// <summary>
    /// Stripe confirmation token for the payment method
    /// </summary>
    [JsonPropertyName("confirmationToken")]
    public required string ConfirmationToken { get; init; }

    /// <summary>
    /// URL to redirect to after payment processing
    /// </summary>
    [JsonPropertyName("returnUrl")]
    public required string ReturnUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
