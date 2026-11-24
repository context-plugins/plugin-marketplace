namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the ListFormVersions operation.
/// </summary>
public sealed record ListFormVersionsRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
