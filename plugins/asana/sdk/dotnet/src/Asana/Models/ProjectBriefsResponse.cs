using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectBriefsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ProjectBriefResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
