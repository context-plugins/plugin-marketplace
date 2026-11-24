namespace Bitbucket.Requests.Addon;

/// <summary>
/// The inputs of the PostAddonLinkersByLinkerKeyValues operation.
/// </summary>
public sealed record PostAddonLinkersByLinkerKeyValuesRequest
{
    /// <summary>
    /// The unique key of a <see href="/cloud/bitbucket/modules/linker/">linker module</see>
    /// as defined in an application descriptor.
    /// </summary>
    public required string LinkerKey { get; init; }
}
