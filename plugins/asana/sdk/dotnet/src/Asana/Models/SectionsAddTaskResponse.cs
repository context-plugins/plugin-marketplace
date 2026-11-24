using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record SectionsAddTaskResponse
{
    /// <summary>
    /// An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
