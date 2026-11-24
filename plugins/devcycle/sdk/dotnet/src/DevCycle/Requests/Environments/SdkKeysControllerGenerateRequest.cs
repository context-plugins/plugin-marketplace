using DevCycle.Models;

namespace DevCycle.Requests.Environments;

/// <summary>
/// The inputs of the SdkKeysControllerGenerate operation.
/// </summary>
public sealed record SdkKeysControllerGenerateRequest
{
    /// <summary>
    /// An Environment key or ID
    /// </summary>
    public required string Environment { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required GenerateSdkTokensDto Body { get; init; }
}
