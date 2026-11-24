using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record ProjectCheckoutKeyRequest
{
    /// <summary>
    /// The type of checkout key to create
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
