using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// A personalization experience with variant and audience configuration.
/// </summary>
public record Experience
{
    /// <summary>
    /// Unique identifier of the experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Type of experience — SEGMENTED for rule-based or AB_TEST for split testing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Current status of the experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusContentstackPersonalizeManagementExperiencesApi? Status { get; init; }

    /// <summary>
    /// List of content variants included in the experience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variants")]
    public IReadOnlyList<ExperienceVariant>? Variants { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the experience was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
