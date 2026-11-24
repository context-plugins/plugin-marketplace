using ApiVerve.Models;

namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Phishingcheck operation.
/// </summary>
public sealed record PhishingcheckRequest
{
    public required V1PhishingcheckRequest Body { get; init; }
}
