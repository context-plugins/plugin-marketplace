using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record TaskCommentsListResponse
{
    [JsonPropertyName("comments")]
    public required IReadOnlyList<TaskCommentItem> Comments { get; init; }

    [JsonPropertyName("can_comment")]
    public required bool CanComment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
