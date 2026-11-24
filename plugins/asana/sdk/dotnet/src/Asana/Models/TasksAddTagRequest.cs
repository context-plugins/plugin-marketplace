using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksAddTagRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskAddTagRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
