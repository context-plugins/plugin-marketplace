using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateFaceLivenessSessionRequestSettings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputConfig")]
    public LivenessOutputConfig? OutputConfig { get; init; }

    /// <summary>
    /// Number of audit images to be returned back. Takes an integer between 0-4. Any integer less than 0 will return 0, any integer above 4 will return 4 images in the response. By default, it is set to 0. The limit is best effort and is based on the actual duration of the selfie-video.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditImagesLimit")]
    public int? AuditImagesLimit { get; init; }

    /// <summary>
    /// Indicates preferred challenge types and versions for the Face Liveness session to be created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChallengePreferences")]
    public IReadOnlyList<ChallengePreference>? ChallengePreferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
