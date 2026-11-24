using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersPurchaseResponse
{
    /// <summary>
    /// Purchase response object
    /// </summary>
    [JsonPropertyName("purchase")]
    public required Purchase Purchase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
