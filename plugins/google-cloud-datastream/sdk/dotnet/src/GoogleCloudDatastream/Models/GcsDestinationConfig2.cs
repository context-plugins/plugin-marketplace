using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// A configuration for how data should be loaded to Cloud Storage.
/// </summary>
public record GcsDestinationConfig2
{
    /// <summary>
    /// Path inside the Cloud Storage bucket to write data to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileRotationInterval")]
    public string? FileRotationInterval { get; init; }

    /// <summary>
    /// AVRO file format configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avroFileFormat")]
    public object? AvroFileFormat { get; init; }

    /// <summary>
    /// JSON file format configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jsonFileFormat")]
    public JsonFileFormat? JsonFileFormat { get; init; }

    /// <summary>
    /// The maximum file size to be saved in the bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileRotationMb")]
    public int? FileRotationMb { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
