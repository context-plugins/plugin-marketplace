using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record FleetProxyRule
{
    /// <summary>
    /// The type of proxy rule.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeAwsCodeBuildFleetApi Type { get; init; }

    /// <summary>
    /// The behavior of the proxy rule.
    /// </summary>
    [JsonPropertyName("effect")]
    public required Effect Effect { get; init; }

    /// <summary>
    /// The destination of the proxy rule.
    /// </summary>
    [JsonPropertyName("entities")]
    public required IReadOnlyList<string> Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
