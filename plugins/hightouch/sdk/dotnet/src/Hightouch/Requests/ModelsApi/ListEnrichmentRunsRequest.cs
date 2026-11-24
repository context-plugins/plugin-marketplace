using Hightouch.Models.Enums;

namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListEnrichmentRuns operation.
/// </summary>
public sealed record ListEnrichmentRunsRequest
{
    /// <summary>
    /// The id of the model
    /// </summary>
    public required double ModelId { get; init; }

    /// <summary>
    /// Filter runs to a Match Booster region
    /// </summary>
    public Region1? Region { get; init; }

    /// <summary>
    /// limit the number of objects returned (default is 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// set the offset on results (for pagination)
    /// </summary>
    public double Offset { get; init; } = 0d;
}
