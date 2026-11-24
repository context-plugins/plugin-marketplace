using Celestia.Models;

namespace Celestia.Requests.Contact;

/// <summary>
/// The inputs of the SubmitWebsiteContact operation.
/// </summary>
public sealed record SubmitWebsiteContactRequest
{
    public required ContactInput Body { get; init; }
}
