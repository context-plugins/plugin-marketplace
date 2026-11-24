using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Access logging configuration enables customers to ship the access logs from the tenant projects to their own project's cloud logging. The feature is at the instance level ad disabled by default. It can be enabled during CreateInstance or UpdateInstance.
/// </summary>
public record GoogleCloudApigeeV1AccessLoggingConfig
{
    /// <summary>
    /// Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: "filter": status_code &gt;= 200 &amp;&amp; status_code &lt; 300 )
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Boolean flag that specifies whether the customer access log feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
