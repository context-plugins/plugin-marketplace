using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record PortfoliosResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public PortfolioResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
