using System;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the GetDispute operation.
/// </summary>
public sealed record GetDisputeRequest
{
    /// <summary>
    /// ID of the dispute.
    /// </summary>
    public required Guid DisputeId { get; init; }

    public required string DisputeIdTemplate { get; init; }
}
