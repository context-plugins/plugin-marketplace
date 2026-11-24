using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateFaceLivenessSessionRequest
{
    /// <summary>
    /// The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit images and reference images.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyId")]
    public string? KmsKeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public CreateFaceLivenessSessionRequestSettings? Settings { get; init; }

    /// <summary>
    /// Idempotent token is used to recognize the Face Liveness request. If the same token is used with multiple CreateFaceLivenessSession requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
