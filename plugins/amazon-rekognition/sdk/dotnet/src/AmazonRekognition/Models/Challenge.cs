using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record Challenge
{
    /// <summary>
    /// The type of the challenge being used for the Face Liveness session.
    /// </summary>
    [JsonPropertyName("Type")]
    public required TypeAmazonRekognitionFaceLivenessApi Type { get; init; }

    /// <summary>
    /// The version of the challenge being used for the Face Liveness session.
    /// </summary>
    [JsonPropertyName("Version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
