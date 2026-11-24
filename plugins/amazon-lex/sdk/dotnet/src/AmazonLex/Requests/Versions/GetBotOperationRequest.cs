namespace AmazonLex.Requests.Versions;

/// <summary>
/// The inputs of the GetBot operation.
/// </summary>
public sealed record GetBotOperationRequest
{
    public required string Name { get; init; }

    public required string VersionOrAlias { get; init; }
}
