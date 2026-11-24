using System;
using Deliverd.Models;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the PostApiV1AiSystemsByIdTransitions operation.
/// </summary>
public sealed record PostApiV1AiSystemsByIdTransitionsRequest
{
    public required Guid Id { get; init; }

    public ApiV1AiSystemsTransitionsRequest? Body { get; init; }
}
