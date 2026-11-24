using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Variablenameconverter operation.
/// </summary>
public sealed record VariablenameconverterRequest
{
    public required V1VariablenameconverterRequest Body { get; init; }
}
