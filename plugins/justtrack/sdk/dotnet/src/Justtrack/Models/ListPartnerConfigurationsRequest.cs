using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

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
