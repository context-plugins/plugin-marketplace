namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerFindStaticConfiguration operation.
/// </summary>
public sealed record FeaturesControllerFindStaticConfigurationRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
