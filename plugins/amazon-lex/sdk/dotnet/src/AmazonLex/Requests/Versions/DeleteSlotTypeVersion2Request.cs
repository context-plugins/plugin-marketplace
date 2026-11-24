using AmazonLex.Models;

namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the DeleteSlotTypeVersion2 operation.
/// </summary>
public sealed record DeleteSlotTypeVersion2Request
{
    public required string Name { get; init; }

    public required string Version { get; init; }

    public DeleteSlotTypeVersionRequest? Body { get; init; }
}
