using System;

namespace Deliverd.Requests.Tasks;

/// <summary>
/// The inputs of the GetApiV1TasksByIdContextGiven operation.
/// </summary>
public sealed record GetApiV1TasksByIdContextGivenRequest
{
    public required Guid Id { get; init; }
}
