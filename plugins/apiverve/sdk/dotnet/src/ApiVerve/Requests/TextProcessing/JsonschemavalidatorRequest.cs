using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Jsonschemavalidator operation.
/// </summary>
public sealed record JsonschemavalidatorRequest
{
    public required V1JsonschemavalidatorRequest Body { get; init; }
}
