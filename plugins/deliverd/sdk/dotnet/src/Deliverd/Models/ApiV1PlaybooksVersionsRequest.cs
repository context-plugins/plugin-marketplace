using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PlaybooksVersionsRequest
{
    /// <summary>
    /// The job, as people name it: Onboard a supplier
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// The outcome when it is done. Becomes the objective of every run; for a prompt, the one line people see
    /// </summary>
    [JsonPropertyName("purpose")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Purpose { get; init; }

    /// <summary>
    /// The steps. Required for a playbook; left out for a prompt, which has one step of its own
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("steps")]
    [MinLength(1)]
    [MaxLength(30)]
    public IReadOnlyList<Step>? Steps { get; init; }

    /// <summary>
    /// Send this instead of steps to draft an approved prompt: words people and agents use, versioned and approved like any playbook
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    public Prompt? Prompt { get; init; }

    /// <summary>
    /// What a run needs to be given, such as the supplier's name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputs")]
    [MaxLength(20)]
    public IReadOnlyList<Input>? Inputs { get; init; }

    /// <summary>
    /// Knowledge every step relies on
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("knowledgeIds")]
    [MaxLength(50)]
    public IReadOnlyList<Guid>? KnowledgeIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceId")]
    public Guid? WorkspaceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    [MaxLength(2000)]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
