using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksRemoveTagRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskRemoveTagRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
