using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record ApiV1ReviewsRequest
{
    /// <summary>
    /// What is being reviewed, as a headline the reviewer sees first
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// What to check. Without this a reviewer decides what 'review' means, and usually decides it means 'looks fine'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    [MaxLength(4000)]
    public string? Instructions { get; init; }

    /// <summary>
    /// The published report under review; the reviewer reads it and comments on it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportId")]
    public Guid? ReportId { get; init; }

    /// <summary>
    /// Pin a version, so publishing again mid-review does not move the ground under it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionId")]
    public Guid? VersionId { get; init; }

    /// <summary>
    /// Emails or user ids. An active member, or a guest who can already open the report where the organisation lets guests review — anyone else is refused rather than emailed
    /// </summary>
    [JsonPropertyName("reviewers")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<string> Reviewers { get; init; }

    /// <summary>
    /// How many approvals settle it; one when omitted. A single 'changes requested' settles it regardless
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredApprovals")]
    [Minimum(1)]
    [Maximum(20)]
    public int? RequiredApprovals { get; init; }

    /// <summary>
    /// After this the review expires unanswered
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
