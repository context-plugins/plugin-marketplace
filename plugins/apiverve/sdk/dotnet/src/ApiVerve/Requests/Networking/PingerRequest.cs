using ApiVerve.Models;

namespace ApiVerve.Requests.Networking;

/// <summary>
/// The inputs of the Pinger operation.
/// </summary>
public sealed record PingerRequest
{
    public required V1PingerRequest Body { get; init; }
}
