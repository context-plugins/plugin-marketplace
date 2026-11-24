namespace Hightouch.Requests.Sources;

/// <summary>
/// The inputs of the GetSource operation.
/// </summary>
public sealed record GetSourceRequest
{
    /// <summary>
    /// The id of the source
    /// </summary>
    public required double SourceId { get; init; }
}
