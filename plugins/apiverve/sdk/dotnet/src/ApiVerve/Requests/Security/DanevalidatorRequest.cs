using ApiVerve.Models;

namespace ApiVerve.Requests.Security;

/// <summary>
/// The inputs of the Danevalidator operation.
/// </summary>
public sealed record DanevalidatorRequest
{
    public required V1DanevalidatorRequest Body { get; init; }
}
