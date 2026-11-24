using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Users;

/// <summary>
/// The inputs of the GetOdataUsers operation.
/// </summary>
public sealed record GetOdataUsersRequest
{
    /// <summary>
    /// OData filter expression to narrow results (e.g., State eq 'Running')
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Maximum number of records to return (default 100, max 1000)
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int? Top { get; init; }

    /// <summary>
    /// Number of records to skip for pagination
    /// </summary>
    [Minimum(0)]
    public int? Skip { get; init; }
}
