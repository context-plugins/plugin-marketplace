using System;
using Hud.Models.AnyOf;

namespace Hud.Requests.RegistryApi;

/// <summary>
/// The inputs of the ListRegistryScenariosV2RegistryRegistryIdScenariosGet operation.
/// </summary>
public sealed record ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest
{
    public required Guid RegistryId { get; init; }

    /// <summary>
    /// Filter scenarios to a specific build of this registry. Defaults to the registry's latest build when omitted.
    /// </summary>
    public BuildId2? BuildId { get; init; }
}
