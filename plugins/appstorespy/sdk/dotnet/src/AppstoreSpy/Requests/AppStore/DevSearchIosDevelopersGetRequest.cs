using AppstoreSpy.Core.Validation.Attributes;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the DevSearchIosDevelopersGet operation.
/// </summary>
public sealed record DevSearchIosDevelopersGetRequest
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
