using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdContext operation.
/// </summary>
public sealed record GetApiV1TasksByIdContextRequest
{
    public required Guid Id { get; init; }
}
