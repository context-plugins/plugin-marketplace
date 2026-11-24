using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateSlotTypeVersionRequest
{
    /// <summary>
    /// The name of the slot type that you want to create a new version for. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Checksum for the $LATEST version of the slot type that you want to publish. If you specify a checksum and the $LATEST version of the slot type has a different checksum, Amazon Lex returns a PreconditionFailedException exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
