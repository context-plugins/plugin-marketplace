using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record CreateGroupRequest
{
    /// <summary>
    /// The case-sensitive name of the new group. Default is a reserved name and names must be unique.
    /// </summary>
    [JsonPropertyName("GroupName")]
    public required string GroupName { get; init; }

    /// <summary>
    /// The filter expression defining criteria by which to group traces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FilterExpression")]
    public string? FilterExpression { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightsConfiguration")]
    public InsightsConfiguration? InsightsConfiguration { get; init; }

    /// <summary>
    /// A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference. The following restrictions apply to tags: Maximum number of user-applied tags per resource: 50 Maximum tag key length: 128 Unicode characters Maximum tag value length: 256 Unicode characters Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @ Tag keys and values are case sensitive. Don't use aws: as a prefix for keys; it's reser
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
