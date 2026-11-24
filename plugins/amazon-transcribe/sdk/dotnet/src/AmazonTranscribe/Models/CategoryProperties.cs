using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CategoryProperties
{
    /// <summary>
    /// The name of the Call Analytics category. Category names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CategoryName")]
    public string? CategoryName { get; init; }

    /// <summary>
    /// The rules used to define a Call Analytics category. Each category can have between 1 and 20 rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Rules")]
    public IReadOnlyList<Rule>? Rules { get; init; }

    /// <summary>
    /// The date and time the specified Call Analytics category was created. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreateTime")]
    public DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// The date and time the specified Call Analytics category was last updated. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-05T12:45:32.691000-07:00 represents 12:45 PM UTC-7 on May 5, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdateTime")]
    public DateTimeOffset? LastUpdateTime { get; init; }

    /// <summary>
    /// The tags, each in the form of a key:value pair, assigned to the specified call analytics category.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The input type associated with the specified category. POST_CALL refers to a category that is applied to batch transcriptions; REAL_TIME refers to a category that is applied to streaming transcriptions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputType")]
    public InputType? InputType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
