using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record ContainerResponse
{
    /// <summary>
    /// The container ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
