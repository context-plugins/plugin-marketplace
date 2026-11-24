using System;
using System.Text.Json.Serialization;
using Cubic.Core.Models;

namespace Cubic.Models;

public record AnalyticsPrRow
{
    /// <summary>
    /// GitHub owner used for the request.
    /// </summary>
    [JsonPropertyName("org")]
    public required string Org { get; init; }

    /// <summary>
    /// Repository name.
    /// </summary>
    [JsonPropertyName("repo")]
    public required string Repo { get; init; }

    /// <summary>
    /// Pull request number.
    /// </summary>
    [JsonPropertyName("prNumber")]
    public required int PrNumber { get; init; }

    /// <summary>
    /// GitHub login of the pull request author.
    /// </summary>
    [JsonPropertyName("author")]
    public required string Author { get; init; }

    /// <summary>
    /// Pull request creation timestamp in ISO 8601 format.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// Pull request merge timestamp in ISO 8601 format.
    /// </summary>
    [JsonPropertyName("mergedAt")]
    public required DateTimeOffset MergedAt { get; init; }

    /// <summary>
    /// Lines added in the pull request, or <c>null</c> when unavailable.
    /// </summary>
    [JsonPropertyName("linesAdded")]
    public required int? LinesAdded { get; init; }

    /// <summary>
    /// Lines deleted in the pull request, or <c>null</c> when unavailable.
    /// </summary>
    [JsonPropertyName("linesDeleted")]
    public required int? LinesDeleted { get; init; }

    /// <summary>
    /// Posted cubic findings on the merged pull request, created within the requested date range.
    /// </summary>
    [JsonPropertyName("numberOfCubicIssuesFlagged")]
    public required int NumberOfCubicIssuesFlagged { get; init; }

    /// <summary>
    /// Posted findings in the requested date range with a detected code change (<c>aiAddressed = true</c>). Positive feedback alone does not count as a fix, and downvotes do not erase detected fixes.
    /// </summary>
    [JsonPropertyName("numberOfCubicIssuesFixed")]
    public required int NumberOfCubicIssuesFixed { get; init; }

    /// <summary>
    /// Timestamp of the first completed cubic review for the pull request.
    /// </summary>
    [JsonPropertyName("cubicFirstReviewedAt")]
    public required DateTimeOffset CubicFirstReviewedAt { get; init; }

    /// <summary>
    /// AI-authored lines attributed to the pull request, capped at its total added and deleted lines; null when no AI authorship data is available.
    /// </summary>
    [JsonPropertyName("totalAiLinesAuthored")]
    public required int? TotalAiLinesAuthored { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
