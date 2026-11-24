using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Options
{
    /// <summary>
    /// Create unbound Datastore tables from the schemas embedded in the bundle (structure only, never row data). A same-named existing table with an incompatible schema is a validation error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createMissingTables")]
    public bool? CreateMissingTables { get; init; } = false;

    /// <summary>
    /// Optional prefix for every created flow's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("namePrefix")]
    public string? NamePrefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
