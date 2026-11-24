using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.CloudFlowApi;

/// <summary>
/// The inputs of the ListCloudflowTemplates operation.
/// </summary>
public sealed record ListCloudflowTemplatesRequest
{
    /// <summary>
    /// Maximum number of templates to return (1–500). Defaults to 50.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Opaque cursor for the next page, taken from <c>pageToken</c> in the previous response. Omit to start from the beginning.
    /// </summary>
    public string? PageToken { get; init; }
}
