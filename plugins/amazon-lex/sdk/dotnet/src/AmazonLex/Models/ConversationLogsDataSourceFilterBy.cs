using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLogsDataSourceFilterBy
{
    /// <summary>
    /// The start time for the conversation log.
    /// </summary>
    [JsonPropertyName("startTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The end time for the conversation log.
    /// </summary>
    [JsonPropertyName("endTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// The selection to filter by input mode for the conversation logs.
    /// </summary>
    [JsonPropertyName("inputMode")]
    public required InputModeAmazonLexModelBuildingV2TestsetgenerationsApi InputMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
