using DoiT.Models;

namespace DoiT.Requests.Ava;

/// <summary>
/// The inputs of the AskAvaStreaming operation.
/// </summary>
public sealed record AskAvaStreamingRequest
{
    public required AvaAskRequest Body { get; init; }
}
