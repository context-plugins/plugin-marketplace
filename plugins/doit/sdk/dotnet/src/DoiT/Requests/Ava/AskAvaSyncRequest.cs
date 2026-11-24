using DoiT.Models;

namespace DoiT.Requests.Ava;

/// <summary>
/// The inputs of the AskAvaSync operation.
/// </summary>
public sealed record AskAvaSyncRequest
{
    public required AvaAskSyncRequest Body { get; init; }
}
