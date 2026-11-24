using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsStorageFolderResponse
{
    /// <summary>
    /// The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder automatically.
    /// </summary>
    [JsonPropertyName("folder")]
    public required DriveFolder Folder { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
