using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the InvokeAgent operation.
/// </summary>
public sealed record InvokeAgentRequest
{
    public required string Slug { get; init; }

    public required V1AgentsInvokeRequest Body { get; init; }
}
