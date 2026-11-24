using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Get invoice payment link
/// </summary>
public record InvoicePaymentLinkRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonPropertyName("customerId")]
    [MinLength(1)]
    public required string CustomerId { get; init; }

    /// <summary>
    /// Recipient email address.
    /// <para>
    /// When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email address.
    /// </para>
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    /// <summary>
    /// Redirect URL after the customer payment is complete
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnUrl")]
    public string? ReturnUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
