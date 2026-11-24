using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ExecutionErrorDetails
{
    /// <summary>
    /// The error code for the error.
    /// </summary>
    [JsonPropertyName("errorCode")]
    public required string ErrorCode { get; init; }

    /// <summary>
    /// The message describing the error.
    /// </summary>
    [JsonPropertyName("errorMessage")]
    public required string ErrorMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
