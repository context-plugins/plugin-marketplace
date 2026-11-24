using Hightouch.Models;

namespace Hightouch.Requests.Sources;

/// <summary>
/// The inputs of the CreateSource operation.
/// </summary>
public sealed record CreateSourceRequest
{
    public required SourceCreate Body { get; init; }
}
