using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1PurchasesDestinationsResponse1
{
    /// <summary>
    /// Created destination details
    /// </summary>
    [JsonPropertyName("did_destination")]
    public required DidDestination DidDestination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
