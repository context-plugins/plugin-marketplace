using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record RemoveMembersResponse
{
    [JsonPropertyName("removed")]
    public required int Removed { get; init; }

    [JsonPropertyName("skipped")]
    public required int Skipped { get; init; }

    [JsonPropertyName("skippedIds")]
    public required IReadOnlyList<string> SkippedIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
