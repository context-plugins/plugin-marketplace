using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// Bulk evaluation failure response
/// </summary>
public record OfrepBulkEvaluationFailureError
{
    /// <summary>
    /// An appropriate  code specific to the bulk evaluation error. See https://openfeature.dev/specification/types#error-code
    /// </summary>
    [JsonPropertyName("errorCode")]
    public required string ErrorCode { get; init; }

    /// <summary>
    /// Optional error details description for logging or other needs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public string? ErrorDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
