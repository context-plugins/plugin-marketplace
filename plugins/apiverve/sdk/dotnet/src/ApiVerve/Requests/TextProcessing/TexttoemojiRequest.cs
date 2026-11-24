using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Texttoemoji operation.
/// </summary>
public sealed record TexttoemojiRequest
{
    public required V1TexttoemojiRequest Body { get; init; }
}
