namespace RelmCrm.Requests.Companies;

/// <summary>
/// The inputs of the RestoreCompany operation.
/// </summary>
public sealed record RestoreCompanyRequest
{
    public required string Id { get; init; }
}
