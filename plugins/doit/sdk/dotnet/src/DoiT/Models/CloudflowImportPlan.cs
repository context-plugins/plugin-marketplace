using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Dry-run result — what an import of this request would do, with every validation issue reported at once.
/// </summary>
public record CloudflowImportPlan
{
    [JsonPropertyName("valid")]
    public required bool Valid { get; init; }

    [JsonPropertyName("requirements")]
    public required IReadOnlyList<Requirement> Requirements { get; init; }

    [JsonPropertyName("flowsToCreate")]
    public required IReadOnlyList<FlowsToCreate> FlowsToCreate { get; init; }

    [JsonPropertyName("errors")]
    public required IReadOnlyList<Error2> Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
