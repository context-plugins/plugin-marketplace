using ApiVerve.Models;

namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Wordsearch operation.
/// </summary>
public sealed record WordsearchRequest
{
    public required V1WordsearchRequest Body { get; init; }
}
