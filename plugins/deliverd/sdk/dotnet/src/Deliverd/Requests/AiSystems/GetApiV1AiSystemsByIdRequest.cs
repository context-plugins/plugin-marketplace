using System;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the GetApiV1AiSystemsById operation.
/// </summary>
public sealed record GetApiV1AiSystemsByIdRequest
{
    public required Guid Id { get; init; }
}
