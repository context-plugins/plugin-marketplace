using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record PathFormat
{
    /// <summary>
    /// A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3 bucket. Specify this list if you only want Lex to read the files under this set of sub-folders.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectPrefixes")]
    public IReadOnlyList<string>? ObjectPrefixes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
