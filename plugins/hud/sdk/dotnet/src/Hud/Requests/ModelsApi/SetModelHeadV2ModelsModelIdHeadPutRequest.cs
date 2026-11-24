using System;
using Hud.Models;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the SetModelHeadV2ModelsModelIdHeadPut operation.
/// </summary>
public sealed record SetModelHeadV2ModelsModelIdHeadPutRequest
{
    public required Guid ModelId { get; init; }

    public required SetHeadRequest Body { get; init; }
}
