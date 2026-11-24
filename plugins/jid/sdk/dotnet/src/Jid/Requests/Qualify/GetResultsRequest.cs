namespace Jid.Requests.Qualify;

/// <summary>
/// The inputs of the GetResults operation.
/// </summary>
public sealed record GetResultsRequest
{
    /// <summary>
    /// Comma-separated qual_ ids, up to 200
    /// </summary>
    public required string Ids { get; init; }
}
