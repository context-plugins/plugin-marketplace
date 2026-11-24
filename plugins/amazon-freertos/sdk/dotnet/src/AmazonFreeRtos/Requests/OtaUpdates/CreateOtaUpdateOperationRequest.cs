using AmazonFreeRtos.Models;

namespace AmazonFreeRtos.Requests.OtaUpdates;

/// <summary>
/// The inputs of the CreateOtaUpdate operation.
/// </summary>
public sealed record CreateOtaUpdateOperationRequest
{
    public required CreateOtaUpdateRequest Body { get; init; }
}
