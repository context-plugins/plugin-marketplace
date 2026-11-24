namespace DoiT.Requests.Contracts;

/// <summary>
/// The inputs of the ListContracts operation.
/// </summary>
public sealed record ListContractsRequest
{
    /// <summary>
    /// The customer (tenant) whose contracts are requested.
    /// </summary>
    public required string CustomerId { get; init; }
}
