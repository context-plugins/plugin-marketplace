using System;

namespace Deliverd.Requests.Collections;

/// <summary>
/// The inputs of the GetApiV1CollectionsById operation.
/// </summary>
public sealed record GetApiV1CollectionsByIdRequest
{
    public required Guid Id { get; init; }
}
