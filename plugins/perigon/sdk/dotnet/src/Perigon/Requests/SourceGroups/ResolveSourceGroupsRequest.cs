using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Perigon.Requests.SourceGroups;

/// <summary>
/// The inputs of the ResolveSourceGroups operation.
/// </summary>
public sealed record ResolveSourceGroupsRequest
{
    /// <summary>
    /// Source group names to resolve (max 100)
    /// </summary>
    [MinLength(0)]
    [MaxLength(100)]
    public IReadOnlyList<string>? Name { get; init; }
}
