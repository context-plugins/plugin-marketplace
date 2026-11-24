using DevCycle.Models;

namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerUpdateStaticConfiguration operation.
/// </summary>
public sealed record FeaturesControllerUpdateStaticConfigurationRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateStaticConfigurationDto Body { get; init; }
}
