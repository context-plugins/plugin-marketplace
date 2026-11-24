namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the SdkKeysControllerInvalidate operation.
/// </summary>
public sealed record SdkKeysControllerInvalidateRequest
{
    /// <summary>
    /// An SDK key
    /// </summary>
    public required string Key { get; init; }

    /// <summary>
    /// An Environment key or ID
    /// </summary>
    public required string Environment { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
