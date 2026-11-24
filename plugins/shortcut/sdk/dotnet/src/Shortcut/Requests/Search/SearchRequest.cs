using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Shortcut.Models.Enums;

namespace Shortcut.Requests.Search;

/// <summary>
/// The inputs of the SearchInvoke operation.
/// </summary>
public sealed record SearchRequest
{
    /// <summary>
    /// See our help center article on <see href="https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators">search operators</see>
    /// </summary>
    [MinLength(1)]
    public required string Query { get; init; }

    /// <summary>
    /// The number of search results to include in a page. Minimum of 1 and maximum of 250.
    /// </summary>
    public long? PageSize { get; init; }

    /// <summary>
    /// The amount of detail included in each result item.
    ///    "full" will include all descriptions and comments and more fields on
    ///    related items such as pull requests, branches and tasks.
    ///    "slim" omits larger fulltext fields such as descriptions and comments
    ///    and only references related items by id.
    ///    The default is "full".
    /// </summary>
    public Detail? Detail { get; init; }

    /// <summary>
    /// The next page token.
    /// </summary>
    public string? Next { get; init; }

    /// <summary>
    /// A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
    /// </summary>
    public IReadOnlyList<EntityType>? EntityTypes { get; init; }
}
