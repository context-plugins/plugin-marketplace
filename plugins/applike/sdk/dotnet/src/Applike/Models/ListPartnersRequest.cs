using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListPartnersRequest
{
    [JsonPropertyName("page")]
    public required RequiredPage Page { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public ListPartnersFilter? Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
