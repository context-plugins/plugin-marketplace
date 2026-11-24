using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SessionMetadata
{
    /// <summary>
    /// The type of SDK that was used to stream the video for the Face Liveness session. This value is self-reported by the client that streamed the session, and Amazon Rekognition doesn't verify it. Don't rely on it for authentication, authorization, or any other security decision.
    /// </summary>
    [JsonPropertyName("SDKType")]
    public required string SdkType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
