using Paid.Models;

namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the UpdateContactByExternalId operation.
/// </summary>
public sealed record UpdateContactByExternalIdRequest
{
    public required string ExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateContactRequest? Body { get; init; }
}
