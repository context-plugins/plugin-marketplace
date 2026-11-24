using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record AvailableProducts
{
    /// <summary>
    /// Links to redirect customers to Tabby Checkout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installments")]
    public IReadOnlyList<CheckoutConfigurationProduct>? Installments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
