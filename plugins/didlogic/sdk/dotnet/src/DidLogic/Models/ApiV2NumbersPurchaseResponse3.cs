using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersPurchaseResponse3
{
    /// <summary>
    /// List of cancelled DIDs returned to inventory
    /// </summary>
    [JsonPropertyName("dids")]
    public required IReadOnlyList<Dids5> Dids { get; init; }

    /// <summary>
    /// Non-fatal notices for requested numbers that were not cancelled — not in your cancelable inventory (<c>not_in_inventory</c>), kept because the balance does not cover the early-return fee (<c>insufficient_funds</c>), or cancelable but not cancelled (<c>cancellation_failed</c>). Present only when non-empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public IReadOnlyList<Warning>? Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
