using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Input model for FindAll run.
/// </summary>
public record FindAllRunInput
{
    /// <summary>
    /// Natural language objective of the FindAll run.
    /// </summary>
    [JsonPropertyName("objective")]
    public required string Objective { get; init; }

    /// <summary>
    /// Type of the entity for the FindAll run.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// List of match conditions for the FindAll run.
    /// </summary>
    [JsonPropertyName("match_conditions")]
    public required IReadOnlyList<MatchCondition> MatchConditions { get; init; }

    /// <summary>
    /// Generator for the FindAll run. One of base, core, pro, preview.
    /// </summary>
    [JsonPropertyName("generator")]
    public required Generator2 Generator { get; init; }

    /// <summary>
    /// Maximum number of matches to find for this FindAll run. Must be between 5 and 1000 (inclusive). May return fewer results.
    /// </summary>
    [JsonPropertyName("match_limit")]
    public required int MatchLimit { get; init; }

    /// <summary>
    /// List of entity names/IDs to exclude from results. At most 10,000 entries are allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclude_list")]
    public ExcludeList? ExcludeList { get; init; }

    /// <summary>
    /// Metadata for the FindAll run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata? Metadata { get; init; }

    /// <summary>
    /// Webhook for the FindAll run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook")]
    public Webhook1? Webhook { get; init; }

    /// <summary>
    /// User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memory_scope_key")]
    public MemoryScopeKey? MemoryScopeKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
