using System;
using Hud.Models.AnyOf;

namespace Hud.Requests.RegistryApi;

/// <summary>
/// The inputs of the GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet operation.
/// </summary>
public sealed record GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest
{
    public required Guid RegistryId { get; init; }

    /// <summary>
    /// Download a specific build's source archive. Defaults to the registry's latest build when omitted.
    /// </summary>
    public BuildId1? BuildId { get; init; }
}
