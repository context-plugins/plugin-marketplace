using RelmCrm.Models;

namespace RelmCrm.Requests.Batch;

/// <summary>
/// The inputs of the BatchInvoke operation.
/// </summary>
public sealed record BatchOperationRequest
{
    public required BatchRequest Body { get; init; }
}
