using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotAnalyzerRecommendation
{
    [JsonPropertyName("issueLocation")]
    public required IssueLocation IssueLocation { get; init; }

    /// <summary>
    /// The priority level of the recommendation. Valid Values: High | Medium | Low
    /// </summary>
    [JsonPropertyName("priority")]
    public required Priority Priority { get; init; }

    /// <summary>
    /// A detailed description of the identified configuration issue.
    /// </summary>
    [JsonPropertyName("issueDescription")]
    public required string IssueDescription { get; init; }

    /// <summary>
    /// The recommended solution to address the identified issue.
    /// </summary>
    [JsonPropertyName("proposedFix")]
    public required string ProposedFix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
