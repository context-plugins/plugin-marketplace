using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record MerchantsResponse
{
    /// <summary>
    /// Always 'list'.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The number of merchants returned.
    /// </summary>
    [JsonPropertyName("size")]
    public required int Size { get; init; }

    /// <summary>
    /// Array of merchant objects.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<MerchantDetails> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links2 Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
