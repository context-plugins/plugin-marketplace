using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2NumbersPurchaseResponse2
{
    /// <summary>
    /// Updated purchase details
    /// </summary>
    [JsonPropertyName("purchase")]
    public required Purchase4 Purchase { get; init; }

    /// <summary>
    /// Document types that are invalid or missing
    /// </summary>
    [JsonPropertyName("invalid_doc_types")]
    public required object InvalidDocTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
