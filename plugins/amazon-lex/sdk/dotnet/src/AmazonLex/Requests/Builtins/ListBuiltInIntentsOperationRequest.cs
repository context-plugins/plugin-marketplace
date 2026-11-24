using AmazonLex.Models;

namespace AmazonLex.Requests.Builtins;

/// <summary>
/// The inputs of the ListBuiltInIntents operation.
/// </summary>
public sealed record ListBuiltInIntentsOperationRequest
{
    public required string LocaleId { get; init; }

    public ListBuiltInIntentsRequest? Body { get; init; }
}
