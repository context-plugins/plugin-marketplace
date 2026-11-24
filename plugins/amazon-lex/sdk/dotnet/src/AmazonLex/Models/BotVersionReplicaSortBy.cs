using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotVersionReplicaSortBy
{
    /// <summary>
    /// The attribute of the sort category for the version replicated bots.
    /// </summary>
    [JsonPropertyName("attribute")]
    public string Attribute { get; } = "BotVersion";

    /// <summary>
    /// The order of the sort category for the version replicated bots.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order8 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
