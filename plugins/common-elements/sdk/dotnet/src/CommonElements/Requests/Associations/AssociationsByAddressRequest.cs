namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsByAddress operation.
/// </summary>
public sealed record AssociationsByAddressRequest
{
    /// <summary>
    /// Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below.
    /// </summary>
    public required string Address { get; init; }

    /// <summary>
    /// 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is scoped to the ZIP.
    /// </summary>
    public required string Zip { get; init; }

    /// <summary>
    /// Max candidates to return, 1 to 5 (default 3).
    /// </summary>
    public double? Limit { get; init; }
}
