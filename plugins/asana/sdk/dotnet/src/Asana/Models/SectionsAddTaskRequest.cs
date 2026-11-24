using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record SectionsAddTaskRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public SectionTaskInsertRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
