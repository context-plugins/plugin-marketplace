using ApiVerve.Models;

namespace ApiVerve.Requests.DataValidation;

/// <summary>
/// The inputs of the Spamdetector operation.
/// </summary>
public sealed record SpamdetectorRequest
{
    public required V1SpamdetectorRequest Body { get; init; }
}
