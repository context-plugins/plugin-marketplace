using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Accounts;

/// <summary>
/// The inputs of the AnalyticsadminAccountsPatch operation.
/// </summary>
public sealed record AnalyticsadminAccountsPatchRequest
{
    /// <summary>
    /// Resource name segment (accountsId).
    /// </summary>
    public required string AccountsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleAnalyticsAdminV1BetaAccount Body { get; init; }
}
