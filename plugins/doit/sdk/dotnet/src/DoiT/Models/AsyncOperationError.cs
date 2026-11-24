using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Error describing why an async operation failed. Present only when status is "failed".
/// </summary>
public record AsyncOperationError
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Stable machine-readable error code.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
