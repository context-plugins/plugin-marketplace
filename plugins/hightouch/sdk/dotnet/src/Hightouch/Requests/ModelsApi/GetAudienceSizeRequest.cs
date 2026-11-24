namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the GetAudienceSize operation.
/// </summary>
public sealed record GetAudienceSizeRequest
{
    /// <summary>
    /// The id of the audience
    /// </summary>
    public required double ModelId { get; init; }

    /// <summary>
    /// The id returned when the size job was started
    /// </summary>
    public required string JobId { get; init; }
}
