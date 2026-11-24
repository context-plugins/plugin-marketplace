using System;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record ArticleRefreshPeekResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public ArticleRefreshData? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fetchedAt")]
    public DateTimeOffset? FetchedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validatedAt")]
    public DateTimeOffset? ValidatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
