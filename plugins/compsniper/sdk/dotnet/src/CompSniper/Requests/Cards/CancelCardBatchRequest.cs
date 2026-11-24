using System;

namespace CompSniper.Requests.Cards;

/// <summary>
/// The inputs of the CancelCardBatch operation.
/// </summary>
public sealed record CancelCardBatchRequest
{
    public required Guid JobId { get; init; }
}
