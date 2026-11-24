using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// JSON file format configuration.
/// </summary>
public record JsonFileFormat
{
    /// <summary>
    /// The schema file format along JSON data files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaFileFormat")]
    public SchemaFileFormat? SchemaFileFormat { get; init; }

    /// <summary>
    /// Compression of the loaded JSON file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compression")]
    public Compression? Compression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
