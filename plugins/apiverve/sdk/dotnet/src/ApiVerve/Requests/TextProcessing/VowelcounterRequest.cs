using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Vowelcounter operation.
/// </summary>
public sealed record VowelcounterRequest
{
    public required V1VowelcounterRequest Body { get; init; }
}
