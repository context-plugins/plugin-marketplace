using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskAddTagRequest
{
    /// <summary>
    /// The tag to add to the task.
    /// </summary>
    [JsonPropertyName("tag")]
    public required string Tag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
