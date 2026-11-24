using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ConnectedHomeSettings
{
    /// <summary>
    /// Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
    /// </summary>
    [JsonPropertyName("Labels")]
    public required IReadOnlyList<string> Labels { get; init; }

    /// <summary>
    /// The minimum confidence required to label an object in the video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
