namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the GetCompany operation.
/// </summary>
public sealed record GetCompanyRequest
{
    public required string Id { get; init; }
}
