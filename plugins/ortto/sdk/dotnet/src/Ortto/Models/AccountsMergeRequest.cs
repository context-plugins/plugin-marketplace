using System.Collections.Generic;
using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record AccountsMergeRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accounts")]
    public IReadOnlyList<Account>? Accounts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_by")]
    public IReadOnlyList<string>? MergeBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_strategy")]
    public int? MergeStrategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
