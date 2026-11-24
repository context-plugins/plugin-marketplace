namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the DeleteCompany operation.
/// </summary>
public sealed record DeleteCompanyRequest
{
    public required string Id { get; init; }
}
