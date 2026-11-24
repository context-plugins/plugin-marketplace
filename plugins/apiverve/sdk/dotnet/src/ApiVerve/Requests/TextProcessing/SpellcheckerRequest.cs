using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Spellchecker operation.
/// </summary>
public sealed record SpellcheckerRequest
{
    public required V1SpellcheckerRequest Body { get; init; }
}
