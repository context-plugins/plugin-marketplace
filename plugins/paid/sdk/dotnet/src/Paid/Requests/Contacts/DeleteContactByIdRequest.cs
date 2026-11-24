namespace Paid.Requests.Contacts;

/// <summary>
/// The inputs of the DeleteContactById operation.
/// </summary>
public sealed record DeleteContactByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
