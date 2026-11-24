using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ResourcePolicy
{
    /// <summary>
    /// The name of the resource policy. Must be unique within a specific Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyName")]
    public string? PolicyName { get; init; }

    /// <summary>
    /// The resource policy document, which can be up to 5kb in size.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyDocument")]
    public string? PolicyDocument { get; init; }

    /// <summary>
    /// Returns the current policy revision id for this policy name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    /// <summary>
    /// When the policy was last updated, in Unix time seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdatedTime")]
    public DateTimeOffset? LastUpdatedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
