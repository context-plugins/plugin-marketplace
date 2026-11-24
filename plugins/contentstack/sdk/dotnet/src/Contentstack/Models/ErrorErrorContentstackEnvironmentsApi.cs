using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Standard error response.
/// </summary>
public record ErrorErrorContentstackEnvironmentsApi
{
    /// <summary>
    /// Human-readable description of the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_message")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// Numeric error code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_code")]
    public int? ErrorCode { get; init; }

    /// <summary>
    /// Field-level validation errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public object? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
