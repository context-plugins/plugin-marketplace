using Fillo.Core.Validation.Attributes;

namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the SummarizeFormResponses operation.
/// </summary>
public sealed record SummarizeFormResponsesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// Comma-separated field ids to keep out of the recent sample's answers.
    /// </summary>
    public string? Exclude { get; init; }

    /// <summary>
    /// Size of the recent sample, 0–20. Default 5.
    /// </summary>
    [Minimum(0)]
    [Maximum(20)]
    public int Recent { get; init; } = 5;
}
