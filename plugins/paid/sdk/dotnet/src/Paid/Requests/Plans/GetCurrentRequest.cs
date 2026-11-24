namespace Paid.Requests.Plans;

/// <summary>
/// The inputs of the GetCurrent operation.
/// </summary>
public sealed record GetCurrentRequest
{
    /// <summary>
    /// The external ID of the customer
    /// </summary>
    public required string CustomerExternalId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
