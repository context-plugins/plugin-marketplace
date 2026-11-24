using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Syllablecounter operation.
/// </summary>
public sealed record SyllablecounterRequest
{
    public required V1SyllablecounterRequest Body { get; init; }
}
