using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// API tokens of a service account, at most 10.
/// </summary>
public record ServiceAccountTokensResponse
{
    /// <summary>
    /// The service account's non-deleted API tokens.
    /// </summary>
    [JsonPropertyName("items")]
    [MaxLength(10)]
    public required IReadOnlyList<ServiceAccountToken> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
