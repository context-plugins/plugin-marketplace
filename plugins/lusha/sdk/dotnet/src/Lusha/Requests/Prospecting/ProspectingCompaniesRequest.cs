using Lusha.Models;

namespace Lusha.Requests.Prospecting;

/// <summary>
/// The inputs of the ProspectingCompanies operation.
/// </summary>
public sealed record ProspectingCompaniesRequest
{
    public required V3ProspectingCompaniesRequest Body { get; init; }
}
