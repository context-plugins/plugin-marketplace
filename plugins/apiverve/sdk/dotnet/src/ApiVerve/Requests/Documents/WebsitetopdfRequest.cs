using ApiVerve.Models;

namespace ApiVerve.Requests.Documents;

/// <summary>
/// The inputs of the Websitetopdf operation.
/// </summary>
public sealed record WebsitetopdfRequest
{
    public required V1WebsitetopdfRequest Body { get; init; }
}
