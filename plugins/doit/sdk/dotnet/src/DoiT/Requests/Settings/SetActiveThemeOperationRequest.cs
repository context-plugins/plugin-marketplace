using DoiT.Models;

namespace DoiT.Requests.Settings;

/// <summary>
/// The inputs of the SetActiveTheme operation.
/// </summary>
public sealed record SetActiveThemeOperationRequest
{
    public required SetActiveThemeRequest Body { get; init; }
}
