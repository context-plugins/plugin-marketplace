namespace Applike.Requests.AppPartnerConnectionApi;

/// <summary>
/// The inputs of the GetManagementV1AppByAppIdConnectionByPartnerId operation.
/// </summary>
public sealed record GetManagementV1AppByAppIdConnectionByPartnerIdRequest
{
    /// <summary>
    /// justtrack's identifier for the app
    /// </summary>
    public required int AppId { get; init; }

    /// <summary>
    /// justtrack's identifier for the advertising partner
    /// </summary>
    public required int PartnerId { get; init; }
}
