using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Requests.Documents;

/// <summary>
/// The inputs of the ImportContent operation.
/// </summary>
public sealed record ImportContentRequest
{
    /// <summary>
    /// Markdown file (.md) or archive (.zip) containing multiple markdown files.
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// Type of import file. Only markdown supported for now on this route.
    /// </summary>
    public Type1 Type { get; init; } = Type1.Markdown;
}
