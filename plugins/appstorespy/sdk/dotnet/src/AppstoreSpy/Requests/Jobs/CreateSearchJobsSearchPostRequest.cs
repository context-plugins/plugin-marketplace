using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.Jobs;

/// <summary>
/// The inputs of the CreateSearchJobsSearchPost operation.
/// </summary>
public sealed record CreateSearchJobsSearchPostRequest
{
    public required SearchCreate Body { get; init; }
}
