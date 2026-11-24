using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ProtectiveEquipmentPerson
{
    /// <summary>
    /// An array of body parts detected on a person's body (including body parts without PPE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BodyParts")]
    public IReadOnlyList<ProtectiveEquipmentBodyPart>? BodyParts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BoundingBox")]
    public BoundingBox? BoundingBox { get; init; }

    /// <summary>
    /// The confidence that Amazon Rekognition has that the bounding box contains a person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    /// <summary>
    /// The identifier for the detected person. The identifier is only unique for a single call to DetectProtectiveEquipment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public int? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
