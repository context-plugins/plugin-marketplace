using System;

namespace CompSniper.Requests.Cards;

/// <summary>
/// The inputs of the GetCardBatch operation.
/// </summary>
public sealed record GetCardBatchRequest
{
    public required Guid JobId { get; init; }
}
