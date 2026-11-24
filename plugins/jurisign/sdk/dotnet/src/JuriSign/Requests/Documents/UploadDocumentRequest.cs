using System.ComponentModel.DataAnnotations;
using JuriSign.Core.Models;

namespace JuriSign.Requests.Documents;

/// <summary>
/// The inputs of the UploadDocument operation.
/// </summary>
public sealed record UploadDocumentRequest
{
    /// <summary>
    /// PDF file to upload (max 20 MB)
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// Document title (defaults to filename if omitted)
    /// </summary>
    [MaxLength(255)]
    public string? Title { get; init; }
}
