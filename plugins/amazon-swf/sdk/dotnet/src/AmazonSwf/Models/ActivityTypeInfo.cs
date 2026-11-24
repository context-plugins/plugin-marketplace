using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record ActivityTypeInfo
{
    [JsonPropertyName("activityType")]
    public required ActivityType ActivityType { get; init; }

    /// <summary>
    /// The current status of the activity type.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// The description of the activity type provided in RegisterActivityType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The date and time this activity type was created through RegisterActivityType.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    /// <summary>
    /// If DEPRECATED, the date and time DeprecateActivityType was called.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecationDate")]
    public DateTimeOffset? DeprecationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
