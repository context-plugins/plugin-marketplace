using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectStatusesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ProjectStatusResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
