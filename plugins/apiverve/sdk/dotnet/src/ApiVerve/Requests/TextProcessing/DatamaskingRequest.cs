using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Datamasking operation.
/// </summary>
public sealed record DatamaskingRequest
{
    public required V1DatamaskingRequest Body { get; init; }
}
