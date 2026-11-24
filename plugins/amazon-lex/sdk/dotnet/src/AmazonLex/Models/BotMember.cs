using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotMember
{
    /// <summary>
    /// The unique ID of a bot that is a member of this network of bots.
    /// </summary>
    [JsonPropertyName("botMemberId")]
    public required string BotMemberId { get; init; }

    /// <summary>
    /// The unique name of a bot that is a member of this network of bots.
    /// </summary>
    [JsonPropertyName("botMemberName")]
    public required string BotMemberName { get; init; }

    /// <summary>
    /// The alias ID of a bot that is a member of this network of bots.
    /// </summary>
    [JsonPropertyName("botMemberAliasId")]
    public required string BotMemberAliasId { get; init; }

    /// <summary>
    /// The alias name of a bot that is a member of this network of bots.
    /// </summary>
    [JsonPropertyName("botMemberAliasName")]
    public required string BotMemberAliasName { get; init; }

    /// <summary>
    /// The version of a bot that is a member of this network of bots.
    /// </summary>
    [JsonPropertyName("botMemberVersion")]
    public required string BotMemberVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
