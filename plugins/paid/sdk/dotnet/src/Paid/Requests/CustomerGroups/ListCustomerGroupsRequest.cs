namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the ListCustomerGroups operation.
/// </summary>
public sealed record ListCustomerGroupsRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
