using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record ReceiptRequestedDeliveryMethod
{
    /// <summary>
    /// The method of receipt delivery.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type22 Type { get; init; }

    /// <summary>
    /// A list of destination addresses or identifiers where the receipt should be sent.
    /// </summary>
    [JsonPropertyName("destinations")]
    [MinLength(1)]
    public required IReadOnlyList<string> Destinations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
