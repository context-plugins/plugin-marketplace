using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksAddDependenciesRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ModifyDependenciesRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
