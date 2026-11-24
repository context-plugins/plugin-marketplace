using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1PoliciesTestRequest
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
    /// Test cases: <c>name</c>, <c>action</c>, <c>input</c>, optional <c>agentId</c>, <c>environment</c>, <c>risk</c>, and <c>expect: { effect, rule? }</c>
    /// </summary>
    [JsonPropertyName("tests")]
    [MaxLength(200)]
    public required IReadOnlyList<object> Tests { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
