using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ProxyConfiguration
{
    /// <summary>
    /// The default behavior of outgoing traffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultBehavior")]
    public DefaultBehavior? DefaultBehavior { get; init; }

    /// <summary>
    /// An array of FleetProxyRule objects that represent the specified destination domains or IPs to allow or deny network access control to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderedProxyRules")]
    public IReadOnlyList<FleetProxyRule>? OrderedProxyRules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
