using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Step
{
    /// <summary>
    /// A short key for the step, lowercase; made from the title when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    [MaxLength(48)]
    public string? Key { get; init; }

    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// What to do at this step, in a sentence or two
    /// </summary>
    [JsonPropertyName("instruction")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Instruction { get; init; }

    /// <summary>
    /// What applies before the step's action: none, gate (check_gate for <c>action</c>), approval (request_approval) or review (request_review). none when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rule")]
    public Rule? Rule { get; init; }

    /// <summary>
    /// For a gate step: the action to check, such as payments.send
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    [MaxLength(100)]
    public string? Action { get; init; }

    /// <summary>
    /// Knowledge entries this step relies on
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("knowledgeIds")]
    [MaxLength(20)]
    public IReadOnlyList<Guid>? KnowledgeIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
