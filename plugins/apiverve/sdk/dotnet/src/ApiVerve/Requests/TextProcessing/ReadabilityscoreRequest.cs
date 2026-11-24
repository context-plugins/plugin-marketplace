using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Readabilityscore operation.
/// </summary>
public sealed record ReadabilityscoreRequest
{
    public required V1ReadabilityscoreRequest Body { get; init; }
}
