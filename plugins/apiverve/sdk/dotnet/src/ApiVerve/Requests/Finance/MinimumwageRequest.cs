namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Minimumwage operation.
/// </summary>
public sealed record MinimumwageRequest
{
    /// <summary>
    /// 2-letter state code (e.g., CA, NY)
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// Year to get minimum wage for (e.g., 2020). Defaults to current year.
    /// </summary>
    public double? Year { get; init; }
}
