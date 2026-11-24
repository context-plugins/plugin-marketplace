using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.KycDocuments;

/// <summary>
/// The inputs of the DocumentsCreate operation.
/// </summary>
public sealed record DocumentsCreateRequest
{
    /// <summary>
    /// Document name
    /// </summary>
    public required string DocumentName { get; init; }

    /// <summary>
    /// Document type
    /// </summary>
    public required DocumentDocType DocumentDocType { get; init; }

    /// <summary>
    /// Frontside file upload (binary)
    /// </summary>
    public required BinaryContent DocumentFilesFrontside { get; init; }

    /// <summary>
    /// Identity ID to associate the document with, from identities_index, identities_create
    /// </summary>
    public required int DocumentIdentityId { get; init; }

    /// <summary>
    /// Country name from documents_countries, e.g. <c>United Kingdom</c>; a code such as <c>UK</c> or <c>GB</c> is refused. For <c>letter_of_intent</c> the country of the purchased number is stored instead
    /// </summary>
    public required string DocumentCountry { get; init; }

    /// <summary>
    /// Backside file upload (binary, Personal ID only)
    /// </summary>
    public BinaryContent? DocumentFilesBackside { get; init; }
}
