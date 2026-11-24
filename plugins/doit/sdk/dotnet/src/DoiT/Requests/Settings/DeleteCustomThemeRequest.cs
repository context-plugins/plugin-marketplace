namespace DoiT.Requests.Settings;

/// <summary>
/// The inputs of the DeleteCustomTheme operation.
/// </summary>
public sealed record DeleteCustomThemeRequest
{
    /// <summary>
    /// Custom theme ID
    /// </summary>
    public required string Id { get; init; }
}
