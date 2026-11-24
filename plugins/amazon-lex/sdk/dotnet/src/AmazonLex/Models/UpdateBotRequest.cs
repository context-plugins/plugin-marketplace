using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UpdateBotRequest
{
    /// <summary>
    /// The unique identifier of the bot to update. This identifier is returned by the CreateBot operation.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The new name of the bot. The name must be unique in the account that creates the bot.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// A description of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    [JsonPropertyName("dataPrivacy")]
    public required DataPrivacy DataPrivacy { get; init; }

    /// <summary>
    /// The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
    /// </summary>
    [JsonPropertyName("idleSessionTTLInSeconds")]
    public required int IdleSessionTtlInSeconds { get; init; }

    /// <summary>
    /// The type of the bot to be updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botType")]
    public BotType5? BotType { get; init; }

    /// <summary>
    /// The list of bot members in the network associated with the update action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botMembers")]
    public IReadOnlyList<BotMember>? BotMembers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorLogSettings")]
    public ErrorLogSettings? ErrorLogSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
