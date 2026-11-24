namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsConnections operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsConnectionsRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits.
    /// </summary>
    public required string Krs { get; init; }
}
