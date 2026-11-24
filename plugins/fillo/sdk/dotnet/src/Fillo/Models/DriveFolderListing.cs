using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record DriveFolderListing
{
    /// <summary>
    /// The Google Drive folder a form's uploads land in. Both keys are null when Fillo manages the folder automatically.
    /// </summary>
    [JsonPropertyName("folder")]
    public required DriveFolder Folder { get; init; }

    /// <summary>
    /// Writable My Drive folders on the connected account.
    /// </summary>
    [JsonPropertyName("folders")]
    public required IReadOnlyList<Folder> Folders { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
