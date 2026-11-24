using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record TagCollection
{
    /// <summary>
    /// An Amazon Web Services tag key that is used to identify the Amazon Web Services resources that DevOps Guru analyzes. All Amazon Web Services resources in your account and Region tagged with this key make up your DevOps Guru application and analysis boundary. The string used for a key in a tag that you use to define your resource coverage must begin with the prefix Devops-guru-. The tag key might be DevOps-Guru-deployment-application or devops-guru-rds-application. When you create a key, the case of characters in the key can be whatever you choose. After you create a key, it is case-sensitive.
    /// </summary>
    [JsonPropertyName("AppBoundaryKey")]
    public required string AppBoundaryKey { get; init; }

    /// <summary>
    /// The values in an Amazon Web Services tag collection. The tag's value is an optional field used to associate a string with the tag key (for example, 111122223333, Production, or a team name). The key and value are the tag's key pair. Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case-sensitive. You can specify a maximum of 256 characters for a tag value.
    /// </summary>
    [JsonPropertyName("TagValues")]
    public required IReadOnlyList<string> TagValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
