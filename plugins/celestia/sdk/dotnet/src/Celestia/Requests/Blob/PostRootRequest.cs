using Celestia.Models;

namespace Celestia.Requests.Blob;

/// <summary>
/// The inputs of the PostRoot operation.
/// </summary>
public sealed record PostRootRequest
{
    public required JsonRpcRequest Body { get; init; }
}
