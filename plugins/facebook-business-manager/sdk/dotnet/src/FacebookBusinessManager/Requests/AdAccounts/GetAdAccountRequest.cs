namespace FacebookBusinessManager.Requests.AdAccounts;

/// <summary>
/// The inputs of the GetAdAccount operation.
/// </summary>
public sealed record GetAdAccountRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }
}
