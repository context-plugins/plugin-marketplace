using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Profiles;

/// <summary>
/// The inputs of the ListProfilesProfilesGet operation.
/// </summary>
public sealed record ListProfilesProfilesGetRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 10;

    [Minimum(1)]
    public int PageNumber { get; init; } = 1;

    public Query? Query { get; init; }
}
