using System;
using Deliverd.Models;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the PostApiV1AiSystemsByIdModelChange operation.
/// </summary>
public sealed record PostApiV1AiSystemsByIdModelChangeRequest
{
    public required Guid Id { get; init; }

    public ApiV1AiSystemsModelChangeRequest? Body { get; init; }
}
