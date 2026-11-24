using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record StartBotAnalyzerRequest
{
    /// <summary>
    /// The unique identifier of the bot to analyze.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The scope of analysis to perform. Currently only BotLocale scope is supported. Valid Values: BotLocale
    /// </summary>
    [JsonPropertyName("analysisScope")]
    public string AnalysisScope { get; } = "BotLocale";

    /// <summary>
    /// The locale identifier for the bot locale to analyze. Required when analysisScope is BotLocale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The version of the bot to analyze. Defaults to DRAFT if not specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
