namespace AmazonFreeRtos.Requests.SoftwareConfigurations;

/// <summary>
/// The inputs of the ListSoftwareConfigurations operation.
/// </summary>
public sealed record ListSoftwareConfigurationsRequest
{
    /// <summary>
    /// Maximum results to return.
    /// </summary>
    public int? MaxResults { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    public string? NextToken { get; init; }
}
