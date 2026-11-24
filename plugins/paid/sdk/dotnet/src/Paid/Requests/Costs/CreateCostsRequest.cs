using Paid.Models;

namespace Paid.Requests.Costs;

/// <summary>
/// The inputs of the CreateCosts operation.
/// </summary>
public sealed record CreateCostsRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CostIngestRequest? Body { get; init; }
}
