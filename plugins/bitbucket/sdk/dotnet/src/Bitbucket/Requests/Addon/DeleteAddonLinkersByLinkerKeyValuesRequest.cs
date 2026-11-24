namespace Bitbucket.Requests.Addon;

/// <summary>
/// The inputs of the DeleteAddonLinkersByLinkerKeyValues operation.
/// </summary>
public sealed record DeleteAddonLinkersByLinkerKeyValuesRequest
{
    /// <summary>
    /// The unique key of a <see href="/cloud/bitbucket/modules/linker/">linker module</see>
    /// as defined in an application descriptor.
    /// </summary>
    public required string LinkerKey { get; init; }
}
