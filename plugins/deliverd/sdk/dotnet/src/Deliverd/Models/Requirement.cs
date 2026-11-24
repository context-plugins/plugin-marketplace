using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Requirement
{
    /// <summary>
    /// The framework's own reference, e.g. 4.2 or UW-1
    /// </summary>
    [JsonPropertyName("ref")]
    [StringLength(60, MinimumLength = 1)]
    public required string Ref { get; init; }

    /// <summary>
    /// What it asks, in a sentence
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(300, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// Controls that evidence it: common ones or your own custom_ controls
    /// </summary>
    [JsonPropertyName("controls")]
    [MinLength(1)]
    [MaxLength(20)]
    public required IReadOnlyList<string> Controls { get; init; }

    /// <summary>
    /// Conditions on the governance profile; every one given must hold
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appliesWhen")]
    public AppliesWhen? AppliesWhen { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
