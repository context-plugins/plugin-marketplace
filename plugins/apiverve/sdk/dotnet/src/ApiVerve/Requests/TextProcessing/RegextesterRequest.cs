using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Regextester operation.
/// </summary>
public sealed record RegextesterRequest
{
    public required V1RegextesterRequest Body { get; init; }
}
