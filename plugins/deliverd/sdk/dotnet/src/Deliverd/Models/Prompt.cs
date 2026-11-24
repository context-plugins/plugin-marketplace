using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

/// <summary>
/// Send this instead of steps to draft an approved prompt: words people and agents use, versioned and approved like any playbook
/// </summary>
public record Prompt
{
    /// <summary>
    /// The approved words. Put each input in as {input name}, e.g. Compare {previous contract} with {renewal contract}
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(8000, MinimumLength = 1)]
    public required string Text { get; init; }

    /// <summary>
    /// What it is not for, and how to check what it produces
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limitations")]
    [MaxLength(2000)]
    public string? Limitations { get; init; }

    /// <summary>
    /// The team or department it is for, as people would filter by it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("department")]
    [MaxLength(120)]
    public string? Department { get; init; }

    /// <summary>
    /// What kind of task, such as Analyze, Create or Edit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskType")]
    [MaxLength(40)]
    public string? TaskType { get; init; }

    /// <summary>
    /// The language it is written in, such as en-GB
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    [MaxLength(20)]
    public string? Language { get; init; }

    /// <summary>
    /// The member who owns it and keeps it current; whoever drafts it when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerEmail")]
    [MaxLength(320)]
    [Format(FormatKind.Email)]
    public string? OwnerEmail { get; init; }

    /// <summary>
    /// When it is next reviewed, YYYY-MM-DD; six months on when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviewDueOn")]
    public DateTimeOffset? ReviewDueOn { get; init; }

    /// <summary>
    /// Run as a playbook, a person reviews the output before it is used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkOutput")]
    public bool? CheckOutput { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
