using DoiT.Models;

namespace DoiT.Requests.Settings;

/// <summary>
/// The inputs of the UpdateCustomTheme operation.
/// </summary>
public sealed record UpdateCustomThemeOperationRequest
{
    /// <summary>
    /// Custom theme ID
    /// </summary>
    public required string Id { get; init; }

    public required UpdateCustomThemeRequest Body { get; init; }
}
