using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetCompanySignals operation.
/// </summary>
public sealed record GetCompanySignalsRequest
{
    public required V3CompanySignalsRequest Body { get; init; }
}
