using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotImportSpecification
{
    /// <summary>
    /// The name that Amazon Lex should use for the bot.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
    /// </summary>
    [JsonPropertyName("roleArn")]
    public required string RoleArn { get; init; }

    [JsonPropertyName("dataPrivacy")]
    public required DataPrivacy DataPrivacy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorLogSettings")]
    public ErrorLogSettings? ErrorLogSettings { get; init; }

    /// <summary>
    /// The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idleSessionTTLInSeconds")]
    public int? IdleSessionTtlInSeconds { get; init; }

    /// <summary>
    /// A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the UpdateBot operation to update tags. To update tags, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botTags")]
    public IReadOnlyDictionary<string, string>? BotTags { get; init; }

    /// <summary>
    /// A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the UpdateAlias operation to update tags. To update tags on the test alias, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testBotAliasTags")]
    public IReadOnlyDictionary<string, string>? TestBotAliasTags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
