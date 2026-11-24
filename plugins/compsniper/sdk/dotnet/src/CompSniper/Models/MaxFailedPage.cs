using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record MaxFailedPage
{
    [JsonPropertyName("page")]
    [Minimum(1)]
    public required int Page { get; init; }

    [JsonPropertyName("code")]
    public required Code Code { get; init; }

    [JsonPropertyName("attempts")]
    [Minimum(1)]
    [Maximum(2)]
    public required int Attempts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
