using Paid.Models;

namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the CreateContact operation.
/// </summary>
public sealed record CreateContactOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateContactRequest? Body { get; init; }
}
