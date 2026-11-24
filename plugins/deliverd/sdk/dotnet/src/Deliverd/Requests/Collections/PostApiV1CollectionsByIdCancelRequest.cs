using System;

namespace Deliverd.Requests.Collections;

/// <summary>
/// The inputs of the PostApiV1CollectionsByIdCancel operation.
/// </summary>
public sealed record PostApiV1CollectionsByIdCancelRequest
{
    public required Guid Id { get; init; }
}
