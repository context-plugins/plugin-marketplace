using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;
using Cloro.Models.Enums;

namespace Cloro.Models;

public record Question
{
    /// <summary>
    /// The question text. Empty when ChatGPT shows the control with no label.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    /// <summary>
    /// The control that ChatGPT shows for the question.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type8 Type { get; init; }

    /// <summary>
    /// The variable that <c>followUpPrompt</c> refers to as <c>{name}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The placeholder of a <c>text</c>, <c>textarea</c> or <c>date</c> question, when ChatGPT gives one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placeholder")]
    public string? Placeholder { get; init; }

    /// <summary>
    /// The choices of a <c>radio</c>, <c>checkbox</c> or <c>select</c> question. Empty for <c>text</c>, <c>textarea</c> and <c>date</c>.
    /// </summary>
    [JsonPropertyName("options")]
    public required IReadOnlyList<Option> Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
