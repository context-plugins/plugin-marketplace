using AmazonLex.Models;

namespace AmazonLex.Requests.Exports;

/// <summary>
/// The inputs of the ListExports operation.
/// </summary>
public sealed record ListExportsOperationRequest
{
    public ListExportsRequest? Body { get; init; }
}
