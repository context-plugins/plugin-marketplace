using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record QuestionDeliverdDevCollectionsApi
{
    /// <summary>
    /// The question, as you would ask it out loud
    /// </summary>
    [JsonPropertyName("prompt")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Prompt { get; init; }

    /// <summary>
    /// The sentence under the field that stops the wrong answer being given
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("help")]
    [MaxLength(1000)]
    public string? Help { get; init; }

    /// <summary>
    /// What kind of answer: text, long_text, number, date, choice, multi_choice or boolean
    /// </summary>
    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// Required unless you say otherwise; a required question blocks submission
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    /// <summary>
    /// The options, for choice and multi_choice. At least two, or the question is not one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
