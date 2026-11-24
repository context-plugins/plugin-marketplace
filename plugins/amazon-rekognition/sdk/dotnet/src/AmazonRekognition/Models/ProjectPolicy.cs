using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ProjectPolicy
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project to which the project policy is attached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectArn")]
    public string? ProjectArn { get; init; }

    /// <summary>
    /// The name of the project policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyName")]
    public string? PolicyName { get; init; }

    /// <summary>
    /// The revision ID of the project policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    /// <summary>
    /// The JSON document for the project policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyDocument")]
    public string? PolicyDocument { get; init; }

    /// <summary>
    /// The Unix datetime for the creation of the project policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimestamp")]
    public DateTimeOffset? CreationTimestamp { get; init; }

    /// <summary>
    /// The Unix datetime for when the project policy was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdatedTimestamp")]
    public DateTimeOffset? LastUpdatedTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
