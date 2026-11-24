namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Savingsbonds operation.
/// </summary>
public sealed record SavingsbondsRequest
{
    /// <summary>
    /// Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.
    /// </summary>
    public string? Period { get; init; }
}
