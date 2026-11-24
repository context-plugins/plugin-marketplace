using ApiVerve.Models;

namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Srvparser operation.
/// </summary>
public sealed record SrvparserRequest
{
    public required V1SrvparserRequest Body { get; init; }
}
