using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksSetParentRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskSetParentRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
