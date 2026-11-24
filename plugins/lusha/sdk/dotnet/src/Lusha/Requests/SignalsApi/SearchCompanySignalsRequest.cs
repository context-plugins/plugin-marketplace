using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the SearchCompanySignals operation.
/// </summary>
public sealed record SearchCompanySignalsRequest
{
    public required CompanySignalsSearchRequest Body { get; init; }
}
