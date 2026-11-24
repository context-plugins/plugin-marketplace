namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Salestaxcalculator operation.
/// </summary>
public sealed record SalestaxcalculatorRequest
{
    /// <summary>
    /// Purchase amount to calculate tax on
    /// </summary>
    public required double Amount { get; init; }

    /// <summary>
    /// Valid US 5-digit ZIP code (required unless state is given)
    /// </summary>
    public string? Zip { get; init; }

    /// <summary>
    /// 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only
    /// </summary>
    public string? State { get; init; }
}
