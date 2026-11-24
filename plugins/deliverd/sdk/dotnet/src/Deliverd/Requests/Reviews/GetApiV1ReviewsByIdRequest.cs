using System;

namespace Deliverd.Requests.Reviews;

/// <summary>
/// The inputs of the GetApiV1ReviewsById operation.
/// </summary>
public sealed record GetApiV1ReviewsByIdRequest
{
    public required Guid Id { get; init; }
}
