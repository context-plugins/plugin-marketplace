namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetIntent operation.
/// </summary>
public sealed record GetIntentOperationRequest
{
    public required string Name { get; init; }

    public required string Version { get; init; }
}
