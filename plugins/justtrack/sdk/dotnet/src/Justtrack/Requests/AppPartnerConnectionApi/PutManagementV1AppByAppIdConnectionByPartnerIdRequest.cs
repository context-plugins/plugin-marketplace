using Justtrack.Models;

namespace Justtrack.Requests.AppPartnerConnectionApi;

/// <summary>
/// The inputs of the PutManagementV1AppByAppIdConnectionByPartnerId operation.
/// </summary>
public sealed record PutManagementV1AppByAppIdConnectionByPartnerIdRequest
{
    /// <summary>
    /// justtrack's identifier for the app
    /// </summary>
    public required int AppId { get; init; }

    /// <summary>
    /// justtrack's identifier for the advertising partner
    /// </summary>
    public required int PartnerId { get; init; }

    public AppPartnerConnection? Body { get; init; }
}
