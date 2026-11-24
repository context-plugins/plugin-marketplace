using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// An audience segment based on attribute rules and user behaviors.
/// </summary>
public record Audience
{
    /// <summary>
    /// Unique identifier of the audience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the audience.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Description of the audience and its targeting criteria.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Logical conditions that determine audience membership.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public object? Rules { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the audience was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
