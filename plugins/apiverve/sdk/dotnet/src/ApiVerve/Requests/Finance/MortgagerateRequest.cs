namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Mortgagerate operation.
/// </summary>
public sealed record MortgagerateRequest
{
    /// <summary>
    /// The mortgage type
    /// </summary>
    public required string Type { get; init; }

    /// <summary>
    /// Year to retrieve rates for (1971-present). Requires month parameter.
    /// </summary>
    public int? Year { get; init; }

    /// <summary>
    /// Month to retrieve rates for (1-12). Required when year is specified.
    /// </summary>
    public int? Month { get; init; }
}
