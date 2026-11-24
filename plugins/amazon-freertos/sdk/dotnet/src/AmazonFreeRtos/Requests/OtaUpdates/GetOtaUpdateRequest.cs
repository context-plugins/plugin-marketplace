namespace AmazonFreeRtos.Requests.OtaUpdates;

/// <summary>
/// The inputs of the GetOtaUpdate operation.
/// </summary>
public sealed record GetOtaUpdateRequest
{
    /// <summary>
    /// The OTA update ID.
    /// </summary>
    public required string OtaUpdateId { get; init; }
}
