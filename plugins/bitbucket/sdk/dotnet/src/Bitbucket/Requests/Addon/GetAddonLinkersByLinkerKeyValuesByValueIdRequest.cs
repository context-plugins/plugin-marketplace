namespace Bitbucket.Requests.Addon;

/// <summary>
/// The inputs of the GetAddonLinkersByLinkerKeyValuesByValueId operation.
/// </summary>
public sealed record GetAddonLinkersByLinkerKeyValuesByValueIdRequest
{
    /// <summary>
    /// The unique key of a <see href="/cloud/bitbucket/modules/linker/">linker module</see>
    /// as defined in an application descriptor.
    /// </summary>
    public required string LinkerKey { get; init; }

    /// <summary>
    /// The numeric ID of the linker value.
    /// </summary>
    public required int ValueId { get; init; }
}
