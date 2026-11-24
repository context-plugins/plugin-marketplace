using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Totpgenerator operation.
/// </summary>
public sealed record TotpgeneratorRequest
{
    public required V1TotpgeneratorRequest Body { get; init; }
}
