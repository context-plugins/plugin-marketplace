using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Textlanguage operation.
/// </summary>
public sealed record TextlanguageRequest
{
    public required V1TextlanguageRequest Body { get; init; }
}
