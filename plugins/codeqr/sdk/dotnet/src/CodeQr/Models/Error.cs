using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record Error
{
    /// <summary>
    /// A short code indicating the error code returned.
    /// </summary>
    [JsonPropertyName("code")]
    public string Code { get; } = "bad_request";

    /// <summary>
    /// A human readable explanation of what went wrong.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// A link to our documentation with more details about this error code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doc_url")]
    public string? DocUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
