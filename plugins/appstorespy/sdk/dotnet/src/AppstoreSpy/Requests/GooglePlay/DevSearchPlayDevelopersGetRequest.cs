using AppstoreSpy.Core.Validation.Attributes;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the DevSearchPlayDevelopersGet operation.
/// </summary>
public sealed record DevSearchPlayDevelopersGetRequest
{
    /// <summary>
    /// Query for search
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Fields to return separated by comma(,)
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Sort params separated by comma(,)
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Count per page
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Page
    /// </summary>
    public int Page { get; init; } = 1;
}
