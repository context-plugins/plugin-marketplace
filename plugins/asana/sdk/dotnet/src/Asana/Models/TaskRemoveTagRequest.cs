using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskRemoveTagRequest
{
    /// <summary>
    /// The tag to remove from the task.
    /// </summary>
    [JsonPropertyName("tag")]
    public required string Tag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
