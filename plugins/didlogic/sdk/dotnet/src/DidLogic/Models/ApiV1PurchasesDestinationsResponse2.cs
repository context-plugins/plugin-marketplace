using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1PurchasesDestinationsResponse2
{
    /// <summary>
    /// Updated destination details
    /// </summary>
    [JsonPropertyName("did_destination")]
    public required DidDestination1 DidDestination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
