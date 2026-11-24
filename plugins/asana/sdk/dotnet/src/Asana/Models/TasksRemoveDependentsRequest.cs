using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TasksRemoveDependentsRequest
{
    /// <summary>
    /// A set of dependent tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ModifyDependentsRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
