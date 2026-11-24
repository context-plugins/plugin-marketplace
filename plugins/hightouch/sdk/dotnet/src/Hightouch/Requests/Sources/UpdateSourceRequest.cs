using Hightouch.Models;

namespace Hightouch.Requests.Sources;

/// <summary>
/// The inputs of the UpdateSource operation.
/// </summary>
public sealed record UpdateSourceRequest
{
    /// <summary>
    /// The source's ID
    /// </summary>
    public required double SourceId { get; init; }

    public required SourceUpdate Body { get; init; }
}
