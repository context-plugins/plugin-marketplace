using Fillo.Core.Validation.Attributes;

namespace Fillo.Requests.Respondents;

/// <summary>
/// The inputs of the FindRespondents operation.
/// </summary>
public sealed record FindRespondentsRequest
{
    /// <summary>
    /// The host app's stable user id.
    /// </summary>
    public string? ExternalId { get; init; }

    /// <summary>
    /// The respondent's email.
    /// </summary>
    public string? Email { get; init; }

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
