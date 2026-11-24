using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// The form that ChatGPT shows at the end of an answer to refine the prompt: questions with options, and a button that sends a follow-up prompt. <c>null</c> when the answer has no form. The form is not part of <c>text</c> or <c>markdown</c>. Schema at /api-reference/endpoint/chatgpt/follow-up-form.
/// </summary>
public record FollowUpForm
{
    /// <summary>
    /// The questions, in the order ChatGPT shows them.
    /// </summary>
    [JsonPropertyName("questions")]
    public required IReadOnlyList<Question> Questions { get; init; }

    /// <summary>
    /// The label of the button that sends the follow-up prompt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submitLabel")]
    public string? SubmitLabel { get; init; }

    /// <summary>
    /// The prompt that the button sends, with <c>{name}</c> where ChatGPT puts the answer to the question of that <c>name</c>. Absent when cloro cannot read it as a template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followUpPrompt")]
    public string? FollowUpPrompt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
