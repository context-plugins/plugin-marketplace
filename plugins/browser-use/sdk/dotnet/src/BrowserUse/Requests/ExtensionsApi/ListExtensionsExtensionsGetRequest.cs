using BrowserUse.Core.Validation.Attributes;

namespace BrowserUse.Requests.ExtensionsApi;

/// <summary>
/// The inputs of the ListExtensionsExtensionsGet operation.
/// </summary>
public sealed record ListExtensionsExtensionsGetRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 10;

    [Minimum(1)]
    public int PageNumber { get; init; } = 1;
}
