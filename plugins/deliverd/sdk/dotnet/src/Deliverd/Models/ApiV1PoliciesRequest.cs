using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesRequest
{
    /// <summary>
    /// What this policy is about, as an administrator will read it in a list
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// What it is for, for whoever reads it next year
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public string? Description { get; init; }

    /// <summary>
    /// Rules to store as version 1. Omit to create the policy empty
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public IReadOnlyList<object>? Rules { get; init; }

    /// <summary>
    /// Put that first version in force immediately. Ignored without <c>rules</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activate")]
    public bool? Activate { get; init; }

    /// <summary>
    /// Why this version exists, for the audit trail
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(1000)]
    public string? Note { get; init; }

    /// <summary>
    /// The repository these rules are kept in. Marks the version as managed in Git
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public SourceDeliverdDevPoliciesApi? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
