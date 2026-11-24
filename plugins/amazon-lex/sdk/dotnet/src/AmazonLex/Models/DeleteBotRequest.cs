using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteBotRequest
{
    /// <summary>
    /// The identifier of the bot to delete.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the bot is being used by another resource. Set this parameter to true to skip this check and remove the bot even if it is being used by another resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipResourceInUseCheck")]
    public bool? SkipResourceInUseCheck { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
