namespace Bitbucket.Requests.Addon;

/// <summary>
/// The inputs of the GetAddonLinkersByLinkerKeyValues operation.
/// </summary>
public sealed record GetAddonLinkersByLinkerKeyValuesRequest
{
    /// <summary>
    /// The unique key of a <see href="/cloud/bitbucket/modules/linker/">linker module</see>
    /// as defined in an application descriptor.
    /// </summary>
    public required string LinkerKey { get; init; }
}
