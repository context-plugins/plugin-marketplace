using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record ChallengePreference
{
    /// <summary>
    /// The types of challenges that have been selected for the Face Liveness session.
    /// </summary>
    [JsonPropertyName("Type")]
    public required Type1AmazonRekognitionFaceLivenessApi Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Versions")]
    public Versions? Versions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
