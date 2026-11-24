using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteIntentVersionRequest
{
    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The version of the intent to delete. You cannot delete the $LATEST version of the intent. To delete the $LATEST version, use the DeleteIntent operation.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
