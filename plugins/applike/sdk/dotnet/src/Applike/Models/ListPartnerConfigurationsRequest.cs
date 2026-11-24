using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record ListPartnerConfigurationsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public ListPartnerConfigurationsFilter? Filter { get; init; }

    [JsonPropertyName("page")]
    public required RequiredPage Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
