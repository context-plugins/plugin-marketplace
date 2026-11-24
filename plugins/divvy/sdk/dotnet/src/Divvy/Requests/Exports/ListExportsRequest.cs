using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Exports;

/// <summary>
/// The inputs of the ListExports operation.
/// </summary>
public sealed record ListExportsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Filters { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
