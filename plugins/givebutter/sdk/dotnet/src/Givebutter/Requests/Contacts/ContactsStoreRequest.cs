using Givebutter.Models;

namespace Givebutter.Requests.Contacts;

/// <summary>
/// The inputs of the ContactsStore operation.
/// </summary>
public sealed record ContactsStoreRequest
{
    public V1ContactsRequest? Body { get; init; }
}
