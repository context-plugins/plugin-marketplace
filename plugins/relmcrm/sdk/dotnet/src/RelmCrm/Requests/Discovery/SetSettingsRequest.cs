using RelmCrm.Models;

namespace RelmCrm.Requests.Discovery;

/// <summary>
/// The inputs of the SetSettings operation.
/// </summary>
public sealed record SetSettingsRequest
{
    public required SettingsRequest Body { get; init; }
}
