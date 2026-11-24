using Upstox.Models;

namespace Upstox.Requests.User;

/// <summary>
/// The inputs of the UpdateUserIp operation.
/// </summary>
public sealed record UpdateUserIpOperationRequest
{
    public required UpdateUserIpRequest Body { get; init; }
}
