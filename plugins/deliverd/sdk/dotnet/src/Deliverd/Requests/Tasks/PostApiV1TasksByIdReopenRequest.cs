using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the PostApiV1TasksByIdReopen operation.
/// </summary>
public sealed record PostApiV1TasksByIdReopenRequest
{
    public required Guid Id { get; init; }
}
