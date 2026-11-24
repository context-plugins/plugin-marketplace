using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1CollectionsRequest
{
    /// <summary>
    /// What you need, as a headline the person sees first
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// Why you are asking, shown above the questions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    [MaxLength(4000)]
    public string? Instructions { get; init; }

    /// <summary>
    /// What to ask, in the order it should be answered
    /// </summary>
    [JsonPropertyName("questions")]
    [MinLength(1)]
    [MaxLength(40)]
    public required IReadOnlyList<QuestionDeliverdDevCollectionsApi> Questions { get; init; }

    /// <summary>
    /// Emails or user ids. An active member, or a guest the organisation already knows — anyone else is refused rather than emailed
    /// </summary>
    [JsonPropertyName("respondents")]
    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<string> Respondents { get; init; }

    /// <summary>
    /// How many submitted replies complete it; everyone asked, when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredResponses")]
    [Minimum(1)]
    [Maximum(100)]
    public int? RequiredResponses { get; init; }

    /// <summary>
    /// A published report the request is about
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportId")]
    public Guid? ReportId { get; init; }

    /// <summary>
    /// Shown to the person, and what the single reminder is measured against
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueAt")]
    public DateTimeOffset? DueAt { get; init; }

    /// <summary>
    /// After this the request closes unanswered
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
