namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ResolveModelV2ModelsResolveGet operation.
/// </summary>
public sealed record ResolveModelV2ModelsResolveGetRequest
{
    /// <summary>
    /// Model slug (or id) to resolve to its catalog record
    /// </summary>
    public required string Model { get; init; }
}
