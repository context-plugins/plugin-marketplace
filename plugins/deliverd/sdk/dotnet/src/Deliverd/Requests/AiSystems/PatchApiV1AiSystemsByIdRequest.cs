using System;
using Deliverd.Models;

namespace Deliverd.Requests.AiSystems;

/// <summary>
/// The inputs of the PatchApiV1AiSystemsById operation.
/// </summary>
public sealed record PatchApiV1AiSystemsByIdRequest
{
    public required Guid Id { get; init; }

    public ApiV1AiSystemsRequest1? Body { get; init; }
}
