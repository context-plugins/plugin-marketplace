using DevCycle.Models;

namespace DevCycle.Requests.BucketingApi;

/// <summary>
/// The inputs of the GetFeatures operation.
/// </summary>
public sealed record GetFeaturesRequest
{
    public required UserData Body { get; init; }
}
