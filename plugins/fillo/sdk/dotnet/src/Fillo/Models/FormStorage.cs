using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record FormStorage
{
    /// <summary>
    /// The destination pinned on the form. <c>none</c> means the form follows the workspace default.
    /// </summary>
    [JsonPropertyName("destination")]
    public required DestinationFilloSoStorageApi Destination { get; init; }

    /// <summary>
    /// The stored destination record: provider (gdrive, box, or s3), an optional r2 variant, and any selected Drive folder.
    /// </summary>
    [JsonPropertyName("storage")]
    public required object? Storage { get; init; }

    /// <summary>
    /// Where an upload would actually land right now — including Fillo's short-lived transit staging. null means uploads are blocked.
    /// </summary>
    [JsonPropertyName("resolved")]
    public required Resolved? Resolved { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
