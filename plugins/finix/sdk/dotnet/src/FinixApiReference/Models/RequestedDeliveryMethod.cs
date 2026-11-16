using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// An individual delivery method.
/// </summary>
public record RequestedDeliveryMethod
{
    /// <summary>
    /// The type of delivery method used to send the receipt.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// A list of destinations to send the receipt.
    /// </summary>
    [JsonPropertyName("destinations")]
    public required IReadOnlyList<string> Destinations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
