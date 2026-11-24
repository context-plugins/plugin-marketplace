using Lusha.Models;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetContactSignalsById operation.
/// </summary>
public sealed record GetContactSignalsByIdRequest
{
    public required ContactSignalsByIdRequest Body { get; init; }
}
