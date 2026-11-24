using Fillo.Models.Enums;

namespace Fillo.Requests.Forms;

/// <summary>
/// The inputs of the GetForm operation.
/// </summary>
public sealed record GetFormRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// Only "draft". Adds the staged revision and requires forms:write as well.
    /// </summary>
    public Include? Include { get; init; }
}
