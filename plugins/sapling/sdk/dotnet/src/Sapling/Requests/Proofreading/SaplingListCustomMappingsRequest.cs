namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingListCustomMappings operation.
/// </summary>
public sealed record SaplingListCustomMappingsRequest
{
    public bool ReturnUsage { get; init; } = false;
}
