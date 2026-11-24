namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Nationaldebt operation.
/// </summary>
public sealed record NationaldebtRequest
{
    /// <summary>
    /// Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
    /// </summary>
    public string? Date { get; init; }
}
