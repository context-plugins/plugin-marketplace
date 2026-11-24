using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record AdOfferCreateResponse
{
    [JsonPropertyName("data")]
    public required AdOfferCreateResponseData Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
