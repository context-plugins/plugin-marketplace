using System;
using Hud.Models;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the UpdateModelV2ModelsModelIdPatch operation.
/// </summary>
public sealed record UpdateModelV2ModelsModelIdPatchRequest
{
    public required Guid ModelId { get; init; }

    public required ModelUpdate Body { get; init; }
}
