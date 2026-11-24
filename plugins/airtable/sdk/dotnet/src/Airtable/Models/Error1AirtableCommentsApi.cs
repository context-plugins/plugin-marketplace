using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Error1AirtableCommentsApi
{
    /// <summary>
    /// The type of error (e.g., AUTHENTICATION_REQUIRED, NOT_FOUND, INVALID_REQUEST).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// A human-readable description of the error.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
