using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Purchase response object
/// </summary>
public record Purchase
{
    /// <summary>
    /// Errors that occurred during purchase
    /// </summary>
    [JsonPropertyName("errors")]
    public required object Errors { get; init; }

    /// <summary>
    /// Successfully purchased numbers
    /// </summary>
    [JsonPropertyName("purchases")]
    public required IReadOnlyList<Purchase1> Purchases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
