namespace Bitly.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWebhooks operation.
/// </summary>
public sealed record GetWebhooksRequest
{
    /// <summary>
    /// A GUID for a Bitly organization
    /// </summary>
    public required string OrganizationGuid { get; init; }
}
