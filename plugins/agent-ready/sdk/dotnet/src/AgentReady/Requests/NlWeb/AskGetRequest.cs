using AgentReady.Models.Enums;

namespace AgentReady.Requests.NlWeb;

/// <summary>
/// The inputs of the AskGet operation.
/// </summary>
public sealed record AskGetRequest
{
    public required string Query { get; init; }

    public Mode? Mode { get; init; }

    public ItemType3? ItemType { get; init; }

    public Stream? Stream { get; init; }
}
