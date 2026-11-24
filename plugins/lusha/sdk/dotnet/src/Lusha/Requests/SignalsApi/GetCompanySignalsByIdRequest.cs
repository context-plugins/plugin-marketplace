using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetCompanySignalsById operation.
/// </summary>
public sealed record GetCompanySignalsByIdRequest
{
    public required CompanySignalsByIdRequest Body { get; init; }
}
