using DevCycle.Models;

namespace DevCycle.Requests.BucketingApi;

/// <summary>
/// The inputs of the GetVariables operation.
/// </summary>
public sealed record GetVariablesRequest
{
    public required UserData Body { get; init; }
}
