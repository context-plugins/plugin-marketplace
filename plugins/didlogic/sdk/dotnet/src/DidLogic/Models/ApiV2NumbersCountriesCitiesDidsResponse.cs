using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersCountriesCitiesDidsResponse
{
    /// <summary>
    /// Paginated list of available DID numbers
    /// </summary>
    [JsonPropertyName("dids")]
    public required Dids Dids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
