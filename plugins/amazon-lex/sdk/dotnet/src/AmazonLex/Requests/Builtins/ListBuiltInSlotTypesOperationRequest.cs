using AmazonLex.Models;

namespace AmazonLex.Requests.Builtins;

/// <summary>
/// The inputs of the ListBuiltInSlotTypes operation.
/// </summary>
public sealed record ListBuiltInSlotTypesOperationRequest
{
    public required string LocaleId { get; init; }

    public ListBuiltInSlotTypesRequest? Body { get; init; }
}
