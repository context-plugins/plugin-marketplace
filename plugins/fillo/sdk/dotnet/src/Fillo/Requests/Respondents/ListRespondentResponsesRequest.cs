using Fillo.Core.Validation.Attributes;

namespace Fillo.Requests.Respondents;

/// <summary>
/// The inputs of the ListRespondentResponses operation.
/// </summary>
public sealed record ListRespondentResponsesRequest
{
    /// <summary>
    /// The Fillo respondent id.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The id from a previous page's nextCursor. Omit for the first page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Page size, 1–100. Default 50.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;
}
