using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskRemoveProjectRequest
{
    /// <summary>
    /// The project to remove the task from.
    /// </summary>
    [JsonPropertyName("project")]
    public required string Project { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
