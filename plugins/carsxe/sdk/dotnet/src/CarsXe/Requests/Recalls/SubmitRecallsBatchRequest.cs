using CarsXe.Models;

namespace CarsXe.Requests.Recalls;

/// <summary>
/// The inputs of the SubmitRecallsBatch operation.
/// </summary>
public sealed record SubmitRecallsBatchRequest
{
    public required V1RecallsBatchSubmitRequest Body { get; init; }
}
