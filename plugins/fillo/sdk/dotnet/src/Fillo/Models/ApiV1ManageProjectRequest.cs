using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageProjectRequest
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The key's own project, by id, slug, or name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project")]
    public string? Project { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
