using Fillo.Models;

namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the ReleaseHeldResponses operation.
/// </summary>
public sealed record ReleaseHeldResponsesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsResponsesReleaseRequest Body { get; init; }
}
