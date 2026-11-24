using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record ErrorResponseError
{
    /// <summary>
    /// HTTP status code.
    /// </summary>
    [JsonPropertyName("statusCode")]
    public required int StatusCode { get; init; }

    /// <summary>
    /// HTTP status text.
    /// </summary>
    [JsonPropertyName("statusMessage")]
    public required string StatusMessage { get; init; }

    /// <summary>
    /// Short error summary (same as statusMessage for most errors).
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Domain error payload set by the handler.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
