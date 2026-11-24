using Archbee.Models.Enums;

namespace Archbee.Requests.FileManager;

/// <summary>
/// The inputs of the ListFileManagerFiles operation.
/// </summary>
public sealed record ListFileManagerFilesRequest
{
    /// <summary>
    /// OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every folder.
    /// </summary>
    public string? ParentId { get; init; }

    /// <summary>
    /// OPTIONAL. Filter by entry type.
    /// </summary>
    public ItemType? ItemType { get; init; }

    /// <summary>
    /// OPTIONAL. Case-insensitive filename filter.
    /// </summary>
    public string? SearchQuery { get; init; }

    /// <summary>
    /// OPTIONAL. Zero-based page index (default 0).
    /// </summary>
    public int? PageIndex { get; init; }

    /// <summary>
    /// OPTIONAL. Page size (1-200).
    /// </summary>
    public int? PageSize { get; init; }
}
