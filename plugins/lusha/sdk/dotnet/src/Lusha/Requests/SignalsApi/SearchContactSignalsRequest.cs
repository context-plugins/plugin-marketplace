using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the SearchContactSignals operation.
/// </summary>
public sealed record SearchContactSignalsRequest
{
    public required ContactSignalsSearchRequest Body { get; init; }
}
