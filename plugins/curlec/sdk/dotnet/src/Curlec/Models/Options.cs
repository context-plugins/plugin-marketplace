using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Checkout and payment page customization.
/// </summary>
public record Options
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkout")]
    public Checkout? Checkout { get; init; }

    /// <summary>
    /// Customise labels on the payment details section of the hosted page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hosted_page")]
    public HostedPage? HostedPage { get; init; }

    /// <summary>
    /// Order-level options including offers and transfers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public OrderRazorpayPaymentLinksApi? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
