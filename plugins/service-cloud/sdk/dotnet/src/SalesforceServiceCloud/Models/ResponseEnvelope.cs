using System.Collections.Generic;
using System.Text.Json.Serialization;
using SalesforceServiceCloud.Models.AnyOf;

namespace SalesforceServiceCloud.Models;

public record ResponseEnvelope
{
    /// <summary>
    /// Bot runtime session ID.
    /// </summary>
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; init; }

    /// <summary>
    /// Bot configuration version.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string? BotVersion { get; init; }

    /// <summary>
    /// Sequence IDs of messages that the bot processed. Except for the initial request to start the session, all requests require a <c>sequenceId</c>.
    /// </summary>
    [JsonPropertyName("processedSequenceIds")]
    public required IReadOnlyList<long> ProcessedSequenceIds { get; init; }

    /// <summary>
    /// Messages from the bot.
    /// </summary>
    [JsonPropertyName("messages")]
    public required IReadOnlyList<Message> Messages { get; init; }

    /// <summary>
    /// Array of custom and context variables passed to the bot when initiating a session (see <see href="https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&amp;type=5&amp;_ga=2.50520745.1281711304.1657558186-1967832163.1652719780">What’s a Variable?</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<Variable>? Variables { get; init; }

    /// <summary>
    /// Session metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public object? Metrics { get; init; }

    /// <summary>
    /// Array of the intents detected by the bot when processing the request. For a bot, "intent" refers to the goal the customer
    /// (see <see href="https://help.salesforce.com/s/articleView?id=sf.bots_service_train_bot.htm&amp;type=5&amp;_ga=2.5901875.1281711304.1657558186-1967832163.1652719780">Use Intents to Understand Your Customers</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intents")]
    public IReadOnlyList<NormalizedIntent>? Intents { get; init; }

    /// <summary>
    /// Array of all entities detected by the bot when processing this request. For a bot, "Entities" refer to the modifiers the customer uses to describe their issue and intent is what they really mean.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entities")]
    public IReadOnlyList<NormalizedEntity>? Entities { get; init; }

    /// <summary>
    /// List of Einstein Bots API endpoints for HATEOS compliancy.
    /// </summary>
    [JsonPropertyName("_links")]
    public required Links Links { get; init; }
}
