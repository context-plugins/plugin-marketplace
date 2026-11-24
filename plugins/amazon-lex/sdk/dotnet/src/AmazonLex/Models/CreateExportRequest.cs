using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record CreateExportRequest
{
    [JsonPropertyName("resourceSpecification")]
    public required ExportResourceSpecification ResourceSpecification { get; init; }

    /// <summary>
    /// The file format of the bot or bot locale definition files.
    /// </summary>
    [JsonPropertyName("fileFormat")]
    public required FileFormat FileFormat { get; init; }

    /// <summary>
    /// An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filePassword")]
    public string? FilePassword { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
