using ZeroBounce.Models;

namespace ZeroBounce.Requests;

/// <summary>
/// The inputs of the ValidateBatch operation.
/// </summary>
public sealed record ValidateBatchOperationRequest
{
    public required ValidateBatchRequest Body { get; init; }
}
