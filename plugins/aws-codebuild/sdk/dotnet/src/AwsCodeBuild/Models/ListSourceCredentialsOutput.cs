using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ListSourceCredentialsOutput
{
    /// <summary>
    /// A list of SourceCredentialsInfo objects. Each SourceCredentialsInfo object includes the authentication type, token ARN, and type of source provider for one set of credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCredentialsInfos")]
    public IReadOnlyList<SourceCredentialsInfo>? SourceCredentialsInfos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
