using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models;

public record TextResponseMessage
{
    /// <summary>
    /// Message type of a text message to the customer.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "text";

    /// <summary>
    /// UUID that references this message.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Message from the bot.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

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
