using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowImportFlowsResult
{
    [JsonPropertyName("flows")]
    public required IReadOnlyList<Flow> Flows { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTables")]
    public IReadOnlyList<CloudflowImportCreatedResource>? CreatedTables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdGlobalVariables")]
    public IReadOnlyList<CloudflowImportCreatedResource>? CreatedGlobalVariables { get; init; }

    /// <summary>
    /// Side resources created before a failed import that best-effort rollback could not remove.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orphanedResources")]
    public IReadOnlyList<CloudflowImportCreatedResource>? OrphanedResources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
