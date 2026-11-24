using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Message
{
    [JsonPropertyName("commentId")]
    public required Guid CommentId { get; init; }

    [JsonPropertyName("author")]
    public required string Author { get; init; }

    [JsonPropertyName("authorType")]
    public required string AuthorType { get; init; }

    [JsonPropertyName("body")]
    public required string Body { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("retractable")]
    public required bool Retractable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
