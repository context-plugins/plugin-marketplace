namespace Dynamics365BusinessCentral.Requests.Companies;

/// <summary>
/// The inputs of the ListCompanies operation.
/// </summary>
public sealed record ListCompaniesRequest
{
    /// <summary>
    /// OData filter expression to return targeted results (Business Central API/OData filtering).
    /// </summary>
    public string? Filter { get; init; }
}
