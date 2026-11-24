using Paid.Models;

namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the UpdateContactById operation.
/// </summary>
public sealed record UpdateContactByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateContactRequest? Body { get; init; }
}
