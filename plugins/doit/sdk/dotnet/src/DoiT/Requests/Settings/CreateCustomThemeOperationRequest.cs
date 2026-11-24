using DoiT.Models;

namespace DoiT.Requests.Settings;

/// <summary>
/// The inputs of the CreateCustomTheme operation.
/// </summary>
public sealed record CreateCustomThemeOperationRequest
{
    public required CreateCustomThemeRequest Body { get; init; }
}
