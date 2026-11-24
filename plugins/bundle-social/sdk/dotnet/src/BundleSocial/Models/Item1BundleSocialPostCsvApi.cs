using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Item1BundleSocialPostCsvApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("importId")]
    public required string ImportId { get; init; }

    [JsonPropertyName("rowNumber")]
    public required double RowNumber { get; init; }

    [JsonPropertyName("status")]
    public required Status4BundleSocialPostCsvApi Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postId")]
    public string? PostId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawRow")]
    public IReadOnlyDictionary<string, string>? RawRow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("normalizedPayload")]
    public object? NormalizedPayload { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
