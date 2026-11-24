using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfoliosAddItemRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public PortfolioAddItemRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
