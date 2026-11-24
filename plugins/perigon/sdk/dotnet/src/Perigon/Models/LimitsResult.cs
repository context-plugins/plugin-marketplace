using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// API usage and limits response.
/// </summary>
public record LimitsResult
{
    /// <summary>
    /// Current API usage and limits for the authenticated account, optionally including the status of additional API keys that were requested. Reading this does not count against the account's request quota or rate limit.
    /// </summary>
    [JsonPropertyName("data")]
    public required ApiLimitsDto Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
