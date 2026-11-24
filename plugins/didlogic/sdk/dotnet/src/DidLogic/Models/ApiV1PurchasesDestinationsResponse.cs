using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1PurchasesDestinationsResponse
{
    /// <summary>
    /// List of destinations
    /// </summary>
    [JsonPropertyName("destination")]
    public required IReadOnlyList<Destination> Destination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
