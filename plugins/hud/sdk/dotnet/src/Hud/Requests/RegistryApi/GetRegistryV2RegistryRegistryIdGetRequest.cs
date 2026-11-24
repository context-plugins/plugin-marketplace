using System;

namespace Hud.Requests.RegistryApi;

/// <summary>
/// The inputs of the GetRegistryV2RegistryRegistryIdGet operation.
/// </summary>
public sealed record GetRegistryV2RegistryRegistryIdGetRequest
{
    public required Guid RegistryId { get; init; }
}
