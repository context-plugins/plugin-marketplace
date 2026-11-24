using System.Collections.Generic;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

public record ChoicesResponseMessage
{
    /// <summary>
    /// Message type of a question with choices.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "choices";

    /// <summary>
    /// UUID that references this message.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Array of answers to choose from.
    /// </summary>
    [JsonPropertyName("choices")]
    public required IReadOnlyList<Choice> Choices { get; init; }

    /// <summary>
    /// "Widget type of how answers appear in the client.
    /// <list type="bullet">
    ///   <item><description><c>buttons</c>—Answers appear in clickable pill boxes.</description></item>
    ///   <item><description><c>menu</c>—Answers appear in clickable boxes vertically stacked."</description></item>
    /// </list>
    /// </summary>
    [JsonPropertyName("widget")]
    public required Widget Widget { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule? Schedule { get; init; }

    /// <summary>
    /// unique ID to identify the generation, used to submit feedback
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feedbackId")]
    public string? FeedbackId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
