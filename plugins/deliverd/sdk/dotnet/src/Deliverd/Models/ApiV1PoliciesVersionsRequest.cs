using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesVersionsRequest
{
    /// <summary>
    /// The complete rule set for this version, not a patch
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<object> Rules { get; init; }

    /// <summary>
    /// Why this version exists, for the audit trail
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(1000)]
    public string? Note { get; init; }

    /// <summary>
    /// Put it in force as well as storing it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activate")]
    public bool? Activate { get; init; }

    /// <summary>
    /// The repository these rules are kept in. Marks the version as managed in Git
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public SourceDeliverdDevPoliciesApi? Source { get; init; }

    /// <summary>
    /// Store nothing when the version in force already has exactly these rules. For CI, which pushes on every merge
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipUnchanged")]
    public bool? SkipUnchanged { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
