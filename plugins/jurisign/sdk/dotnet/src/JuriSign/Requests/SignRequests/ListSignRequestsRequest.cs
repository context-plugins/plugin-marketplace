using JuriSign.Models.Enums;

namespace JuriSign.Requests.SignRequests;

/// <summary>
/// The inputs of the ListSignRequests operation.
/// </summary>
public sealed record ListSignRequestsRequest
{
    /// <summary>
    /// Filter by status
    /// </summary>
    public StatusJuriSignSignRequestsApi? Status { get; init; }

    public int PerPage { get; init; } = 20;

    public int Page { get; init; } = 1;
}
