using Fillo.Models;

namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the DuplicateForm operation.
/// </summary>
public sealed record DuplicateFormRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public ApiV1ManageFormsDuplicateRequest? Body { get; init; }
}
