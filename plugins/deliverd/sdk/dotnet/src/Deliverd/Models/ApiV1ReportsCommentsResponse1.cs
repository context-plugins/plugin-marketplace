using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ReportsCommentsResponse1
{
    [JsonPropertyName("threadId")]
    public required Guid ThreadId { get; init; }

    [JsonPropertyName("commentId")]
    public required Guid CommentId { get; init; }

    [JsonPropertyName("anchored")]
    public required bool Anchored { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
