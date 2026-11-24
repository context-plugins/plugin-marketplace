using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1KnowledgeRequest
{
    /// <summary>
    /// fact (true here), convention (how we do it), decision (settled, with why), procedure (a how-to note), glossary (what a term means here), contact (who to ask about what) or known_issue (a problem and its workaround)
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind1DeliverdDevKnowledgeApi Kind { get; init; }

    /// <summary>
    /// The fact or rule in one line, as it should appear in a list
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// The detail another agent needs to act on it, written to be read by a person. Never a secret, token or password: those are refused
    /// </summary>
    [JsonPropertyName("body")]
    [StringLength(8000, MinimumLength = 1)]
    public required string Body { get; init; }

    /// <summary>
    /// A few words to find it by
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Keep it inside one workspace; the whole organisation when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceId")]
    public Guid? WorkspaceId { get; init; }

    /// <summary>
    /// Tie it to one project (flow)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowId")]
    public Guid? FlowId { get; init; }

    /// <summary>
    /// The confirmed entry this would replace. It keeps that entry's scope, and replaces it only once a person confirms it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supersedesId")]
    public Guid? SupersedesId { get; init; }

    /// <summary>
    /// Where this comes from, if it is a page somebody can open
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? SourceUrl { get; init; }

    /// <summary>
    /// What the source is, in a few words
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLabel")]
    [MaxLength(200)]
    public string? SourceLabel { get; init; }

    /// <summary>
    /// Your own reference. An open entry with the same one is returned instead of a second
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [MaxLength(200)]
    public string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
