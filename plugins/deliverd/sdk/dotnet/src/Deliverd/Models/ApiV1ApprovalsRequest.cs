using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ApprovalsRequest
{
    /// <summary>
    /// What is being asked, as a headline
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// Why, what it affects, what it costs — what the approver reads first
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    /// <summary>
    /// How the approver should weigh it; medium when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("risk")]
    public RiskDeliverdDevApprovalsApi? Risk { get; init; }

    /// <summary>
    /// Evidence, one line each, shown as a checklist
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("factors")]
    [MaxLength(20)]
    public IReadOnlyList<Factor>? Factors { get; init; }

    /// <summary>
    /// Where to read more
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    [MaxLength(10)]
    public IReadOnlyList<Link>? Links { get; init; }

    /// <summary>
    /// A published report the request is about
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportId")]
    public Guid? ReportId { get; init; }

    /// <summary>
    /// Who may decide: members, groups or workspaces by email, id or name, or an admitted guest by email where the organisation lets guests approve. The organisation's admins when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvers")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Approvers { get; init; }

    /// <summary>
    /// After this the request expires undecided
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Your own reference, returned unchanged
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [MaxLength(200)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The flow this belongs to — shown as a Project in the app — when it is one step of a larger piece of work. Must be an open flow in your organisation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowId")]
    public Guid? FlowId { get; init; }

    /// <summary>
    /// Which agent is asking, in your words. Recorded and shown as declared by you; nothing is decided on it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public AgentDeliverdDevApprovalsApi? Agent { get; init; }

    /// <summary>
    /// The model the agent is running on, such as claude-opus-5. Recorded and shown as declared by you
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    [StringLength(200, MinimumLength = 1)]
    public string? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// The arguments you will run with if this is approved, shown to the approver. The decision returns what to run with
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public IReadOnlyDictionary<string, object>? Input { get; init; }

    /// <summary>
    /// Fields of <c>input</c> the approver may correct before approving (strings, numbers, true/false). Omitted: approve or reject only
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("editableFields")]
    [MaxLength(50)]
    public IReadOnlyList<string>? EditableFields { get; init; }

    /// <summary>
    /// What your model or decision engine recommends. Shown to the approver as context, never as the decision. Where the organisation has blind review on, a high or critical risk request's recommendation is shown only after the approver records their own view
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendation")]
    public Recommendation? Recommendation { get; init; }

    /// <summary>
    /// Where to POST the outcome when a person answers, signed with the callbackSecret returned by this call. Saves polling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callbackUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? CallbackUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
