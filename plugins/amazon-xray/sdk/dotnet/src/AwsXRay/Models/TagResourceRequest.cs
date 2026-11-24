using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TagResourceRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
    /// </summary>
    [JsonPropertyName("ResourceARN")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The following restrictions apply to tags: Maximum number of user-applied tags per resource: 50 Maximum tag key length: 128 Unicode characters Maximum tag value length: 256 Unicode characters Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @ Tag keys and values are case sensitive. Don't use aws: as a prefix for
    /// </summary>
    [JsonPropertyName("Tags")]
    public required IReadOnlyList<Tag> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
