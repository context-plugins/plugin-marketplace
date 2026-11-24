namespace AmazonFreeRtos.Requests.OtaUpdates;

/// <summary>
/// The inputs of the DeleteOtaUpdate operation.
/// </summary>
public sealed record DeleteOtaUpdateRequest
{
    /// <summary>
    /// The OTA update ID to delete.
    /// </summary>
    public required string OtaUpdateId { get; init; }

    /// <summary>
    /// Whether to delete the stream associated with the update.
    /// </summary>
    public bool? DeleteStream { get; init; }

    /// <summary>
    /// Whether to force delete the associated AWS IoT job.
    /// </summary>
    public bool? ForceDeleteAwsJob { get; init; }
}
