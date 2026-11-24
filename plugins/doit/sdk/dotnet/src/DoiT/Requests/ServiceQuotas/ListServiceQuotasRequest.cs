using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Requests.ServiceQuotas;

/// <summary>
/// The inputs of the ListServiceQuotas operation.
/// </summary>
public sealed record ListServiceQuotasRequest
{
    /// <summary>
    /// Filter results to a cloud provider. Omit to return all supported providers.
    /// </summary>
    public CloudProvider1? CloudProvider { get; init; }

    /// <summary>
    /// Return quotas whose utilization percentage is greater than or equal to this value.
    /// </summary>
    [Minimum(0.0)]
    [Maximum(100.0)]
    public double? MinUtilizationPercent { get; init; }

    /// <summary>
    /// Maximum number of results to return in one page.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
