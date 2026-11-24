using CircleCi.Models;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the CreateContext operation.
/// </summary>
public sealed record CreateContextOperationRequest
{
    public required CreateContextRequest Body { get; init; }
}
