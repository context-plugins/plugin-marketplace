namespace NordicFinancialNews.Requests.Events;

/// <summary>
/// The inputs of the GetApiV1EventsById operation.
/// </summary>
public sealed record GetApiV1EventsByIdRequest
{
    /// <summary>
    /// The event ID, as returned in the <c>id</c> field of list responses.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// When <c>true</c>, <c>company_ids</c> and <c>companies[]</c> also include companies with a peripheral role (advisor, speaker, or a passing mention). Default <c>false</c> lists companies with an active-involvement role only (subject, acquirer, target, investor, issuer, partner). <c>association_tier</c> is present on every <c>companies[]</c> entry regardless.
    /// </summary>
    public bool? IncludePeripheral { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if the event has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }
}
