using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Standard error response.
/// </summary>
public record ErrorResponseErrorBoomiDataHubGoldenRecordsApi
{
    /// <summary>
    /// Human-readable error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Numeric error code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
