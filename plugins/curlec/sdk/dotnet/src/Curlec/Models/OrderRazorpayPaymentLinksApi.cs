using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// Order-level options including offers and transfers.
/// </summary>
public record OrderRazorpayPaymentLinksApi
{
    /// <summary>
    /// Offer IDs to apply. Do not combine with accept_partial.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offers")]
    public IReadOnlyList<string>? Offers { get; init; }

    /// <summary>
    /// Auto-transfer payments to linked accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfers")]
    public IReadOnlyList<Transfer>? Transfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
