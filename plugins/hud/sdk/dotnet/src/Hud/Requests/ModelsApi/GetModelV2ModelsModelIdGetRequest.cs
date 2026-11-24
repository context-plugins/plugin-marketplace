using System;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the GetModelV2ModelsModelIdGet operation.
/// </summary>
public sealed record GetModelV2ModelsModelIdGetRequest
{
    public required Guid ModelId { get; init; }
}
