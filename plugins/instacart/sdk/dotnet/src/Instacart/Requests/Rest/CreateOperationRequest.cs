using Instacart.Models;

namespace Instacart.Requests.Rest;

/// <summary>
/// The inputs of the Create operation.
/// </summary>
public sealed record CreateOperationRequest
{
    public required CreateRequest Body { get; init; }
}
