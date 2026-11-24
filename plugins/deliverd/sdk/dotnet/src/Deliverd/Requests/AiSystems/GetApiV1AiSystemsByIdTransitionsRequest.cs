using System;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the GetApiV1AiSystemsByIdTransitions operation.
/// </summary>
public sealed record GetApiV1AiSystemsByIdTransitionsRequest
{
    public required Guid Id { get; init; }
}
