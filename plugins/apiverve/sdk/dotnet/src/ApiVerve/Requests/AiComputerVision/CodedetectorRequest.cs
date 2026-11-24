using ApiVerve.Models;

namespace ApiVerve.Requests.AiComputerVision;

/// <summary>
/// The inputs of the Codedetector operation.
/// </summary>
public sealed record CodedetectorRequest
{
    public required V1CodedetectorRequest Body { get; init; }
}
