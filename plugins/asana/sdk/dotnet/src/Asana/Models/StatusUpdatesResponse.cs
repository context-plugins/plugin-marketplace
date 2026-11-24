using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record StatusUpdatesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public StatusUpdateResponse? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
