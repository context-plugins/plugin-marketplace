using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record StatusUpdatesRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public StatusUpdateRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
