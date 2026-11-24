using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ErrorResponseModel
{
    /// <summary>
    /// HTTP status code
    /// </summary>
    [JsonPropertyName("statusCode")]
    public required int StatusCode { get; init; }

    /// <summary>
    /// Error message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Detailed error messages (optional, only for validation errors)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<string>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
