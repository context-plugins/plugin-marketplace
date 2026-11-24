using Fillo.Models;

namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the RenameForm operation.
/// </summary>
public sealed record RenameFormRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsRequest Body { get; init; }
}
