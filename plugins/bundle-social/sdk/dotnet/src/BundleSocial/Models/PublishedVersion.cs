using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record PublishedVersion
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("flowId")]
    public required string FlowId { get; init; }

    [JsonPropertyName("version")]
    public required double Version { get; init; }

    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    [JsonPropertyName("definition")]
    public required Definition Definition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishedAt")]
    public DateTimeOffset? PublishedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishedByUserId")]
    public string? PublishedByUserId { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
