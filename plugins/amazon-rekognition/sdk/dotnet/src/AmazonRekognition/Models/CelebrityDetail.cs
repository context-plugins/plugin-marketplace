using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CelebrityDetail
{
    /// <summary>
    /// An array of URLs pointing to additional celebrity information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Urls")]
    public IReadOnlyList<string>? Urls { get; init; }

    /// <summary>
    /// The name of the celebrity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// The unique identifier for the celebrity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BoundingBox")]
    public BoundingBox? BoundingBox { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Face")]
    public FaceDetail? Face { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KnownGender")]
    public KnownGender? KnownGender { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
