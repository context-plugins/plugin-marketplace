using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksDuplicateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TaskDuplicateRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
