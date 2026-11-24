using Paid.Models;

namespace Paid.Requests.Signals;

/// <summary>
/// The inputs of the CreateSignals operation.
/// </summary>
public sealed record CreateSignalsRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public BulkSignalsRequest? Body { get; init; }
}
