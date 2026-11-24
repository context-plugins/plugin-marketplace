using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record EntityRecognizerSummary
{
    /// <summary>
    /// The name that you assigned the entity recognizer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RecognizerName")]
    public string? RecognizerName { get; init; }

    /// <summary>
    /// The number of versions you created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfVersions")]
    public int? NumberOfVersions { get; init; }

    /// <summary>
    /// The time that the latest entity recognizer version was submitted for processing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LatestVersionCreatedAt")]
    public DateTimeOffset? LatestVersionCreatedAt { get; init; }

    /// <summary>
    /// The version name you assigned to the latest entity recognizer version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LatestVersionName")]
    public string? LatestVersionName { get; init; }

    /// <summary>
    /// Provides the status of the latest entity recognizer version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LatestVersionStatus")]
    public LatestVersionStatus1? LatestVersionStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
