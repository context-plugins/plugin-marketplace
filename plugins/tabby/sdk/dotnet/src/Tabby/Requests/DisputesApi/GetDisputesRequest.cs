using Tabby.Models.Enums;

namespace Tabby.Requests.DisputesApi;

/// <summary>
/// The inputs of the GetDisputes operation.
/// </summary>
public sealed record GetDisputesRequest
{
    /// <summary>
    /// Dispute status. If not set, then all statuses will be in result.
    /// </summary>
    public Statuses? Statuses { get; init; }

    /// <summary>
    /// Filter disputes created after or at the specified date and time.
    /// </summary>
    public string? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter disputes created before or at the specified date and time.
    /// </summary>
    public string? CreatedAtLte { get; init; }

    /// <summary>
    /// To load the next page of disputed items provide page token. This code can be obtained from the <c>next_page_token</c> variable in the response of dispute list. If <c>next_page_token</c> is empty in response, it means last page of disputes has been reached.
    /// </summary>
    public string? PageToken { get; init; }
}
