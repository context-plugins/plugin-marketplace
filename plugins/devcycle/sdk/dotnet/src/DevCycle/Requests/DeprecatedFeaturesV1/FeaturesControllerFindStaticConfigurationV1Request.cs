namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerFindStaticConfigurationV1 operation.
/// </summary>
public sealed record FeaturesControllerFindStaticConfigurationV1Request
{
    public required string Feature { get; init; }

    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
