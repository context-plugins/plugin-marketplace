using Ortto.Models;

namespace Ortto.Requests.People;

/// <summary>
/// The inputs of the MergePeople operation.
/// </summary>
public sealed record MergePeopleRequest
{
    public required PersonMergeRequest Body { get; init; }
}
