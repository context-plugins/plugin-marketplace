namespace DoiT.Requests.Settings;

/// <summary>
/// The inputs of the GetCustomTheme operation.
/// </summary>
public sealed record GetCustomThemeRequest
{
    /// <summary>
    /// Custom theme ID
    /// </summary>
    public required string Id { get; init; }
}
