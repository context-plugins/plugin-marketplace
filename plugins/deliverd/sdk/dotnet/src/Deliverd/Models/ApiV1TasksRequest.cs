using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1TasksRequest
{
    /// <summary>
    /// A short name for the objective
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// What the work is ultimately for, in a sentence or two. Kept apart from the conversation and returned at the top of every context
    /// </summary>
    [JsonPropertyName("objective")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Objective { get; init; }

    /// <summary>
    /// Keep it inside one workspace; only its members and administrators can see it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceId")]
    public Guid? WorkspaceId { get; init; }

    /// <summary>
    /// The flow its approvals and reviews belong to, so a decision put to approval lands on the same timeline
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowId")]
    public Guid? FlowId { get; init; }

    /// <summary>
    /// Your own reference. An open objective you started under the same one is returned instead of a new one, so a restarted agent resumes its goal
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [MaxLength(200)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// A link to the conversation where this work happens, if your tool has one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? SessionUrl { get; init; }

    /// <summary>
    /// The starting state, if anything is already known
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Govern it from the start (Compliance Mode, Business and Enterprise): the AI system, purpose, owners, risk, data and oversight
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("governance")]
    public Governance? Governance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
