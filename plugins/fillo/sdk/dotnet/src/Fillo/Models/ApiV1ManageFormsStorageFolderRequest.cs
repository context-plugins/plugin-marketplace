using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsStorageFolderRequest
{
    /// <summary>
    /// A Google Drive folder id.
    /// </summary>
    [JsonPropertyName("folderId")]
    [RegularExpression("^[A-Za-z0-9_-]{10,200}$")]
    public required string FolderId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
