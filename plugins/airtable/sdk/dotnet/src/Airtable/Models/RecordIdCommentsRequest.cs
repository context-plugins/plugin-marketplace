using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record RecordIdCommentsRequest
{
    /// <summary>
    /// The text content of the comment. Supports @[usrXXXXXXXX] syntax for mentions.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
