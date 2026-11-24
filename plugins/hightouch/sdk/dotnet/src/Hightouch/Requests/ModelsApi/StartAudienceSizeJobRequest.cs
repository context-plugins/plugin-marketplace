namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the StartAudienceSizeJob operation.
/// </summary>
public sealed record StartAudienceSizeJobRequest
{
    /// <summary>
    /// The id of the audience
    /// </summary>
    public required double ModelId { get; init; }
}
