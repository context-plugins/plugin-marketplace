using System;

namespace Deliverd.Requests.Reviews;

/// <summary>
/// The inputs of the PostApiV1ReviewsByIdCancel operation.
/// </summary>
public sealed record PostApiV1ReviewsByIdCancelRequest
{
    public required Guid Id { get; init; }
}
