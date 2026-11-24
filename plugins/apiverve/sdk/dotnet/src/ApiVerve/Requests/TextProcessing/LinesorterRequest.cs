using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Linesorter operation.
/// </summary>
public sealed record LinesorterRequest
{
    public required V1LinesorterRequest Body { get; init; }
}
