namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerRemoveV1 operation.
/// </summary>
public sealed record FeaturesControllerRemoveV1Request
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

    /// <summary>
    /// Controls whether the feature's associated variables should also be deleted
    /// </summary>
    public bool? DeleteVariables { get; init; }
}
