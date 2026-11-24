using System;

namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesDownload operation.
/// </summary>
public sealed record DeliveriesDownloadRequest
{
    /// <summary>
    /// Delivery id.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// The artifact's capability token, as returned on the delivery's status. Use this when the consumer should not hold an API key. A token download does not consume your monthly request quota.
    /// </summary>
    public string? Token { get; init; }

    /// <summary>
    /// <c>manifest</c> for the run's manifest or <c>dictionary</c> for its column dictionary, fetched through the same authorization. Omit for the data itself.
    /// </summary>
    public string? Part { get; init; }
}
