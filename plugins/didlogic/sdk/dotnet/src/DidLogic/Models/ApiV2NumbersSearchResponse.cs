using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersSearchResponse
{
    /// <summary>
    /// Paginated search results
    /// </summary>
    [JsonPropertyName("dids")]
    public required Dids2 Dids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
