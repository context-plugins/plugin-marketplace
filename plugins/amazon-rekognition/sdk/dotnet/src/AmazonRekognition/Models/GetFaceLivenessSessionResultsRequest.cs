using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record GetFaceLivenessSessionResultsRequest
{
    /// <summary>
    /// A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an idempotency token for all operations associated with the session.
    /// </summary>
    [JsonPropertyName("SessionId")]
    public required string SessionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
