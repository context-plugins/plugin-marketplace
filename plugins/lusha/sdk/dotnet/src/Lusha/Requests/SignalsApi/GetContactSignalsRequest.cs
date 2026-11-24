using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetContactSignals operation.
/// </summary>
public sealed record GetContactSignalsRequest
{
    public required V3ContactSignalsRequest Body { get; init; }
}
