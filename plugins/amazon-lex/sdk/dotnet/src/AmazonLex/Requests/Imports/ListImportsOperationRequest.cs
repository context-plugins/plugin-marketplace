using AmazonLex.Models;

namespace AmazonLex.Requests.Imports;

/// <summary>
/// The inputs of the ListImports operation.
/// </summary>
public sealed record ListImportsOperationRequest
{
    public ListImportsRequest? Body { get; init; }
}
