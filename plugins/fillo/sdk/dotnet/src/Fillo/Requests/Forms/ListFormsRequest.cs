using Fillo.Core.Validation.Attributes;

namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the ListForms operation.
/// </summary>
public sealed record ListFormsRequest
{
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
