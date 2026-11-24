using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1PoliciesReplayRequest
{
    /// <summary>
    /// With <c>version</c>: try a stored version, usually a draft
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policyId")]
    public Guid? PolicyId { get; init; }

    /// <summary>
    /// The stored version's number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    [Minimum(1)]
    public int? Version { get; init; }

    /// <summary>
    /// With <c>rules</c>: try a policy file that has not been pushed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// The file's complete rule set
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public IReadOnlyList<object>? Rules { get; init; }

    /// <summary>
    /// How far back to replay. Default 30
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("days")]
    [Minimum(1)]
    [Maximum(90)]
    public int? Days { get; init; }

    /// <summary>
    /// How many changed decisions to list. Default 25
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("examples")]
    [Minimum(0)]
    [Maximum(100)]
    public int? Examples { get; init; }

    /// <summary>
    /// What counts as failing, for CI: rejected_allowed (default), loosened, changed or never
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failOn")]
    public FailOn? FailOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
