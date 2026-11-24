using Beehiiv.Models;

namespace Beehiiv.Requests.CustomFields;

/// <summary>
/// The inputs of the Create4 operation.
/// </summary>
public sealed record Create4Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }

    public PublicationsCustomFieldsRequest? Body { get; init; }
}
