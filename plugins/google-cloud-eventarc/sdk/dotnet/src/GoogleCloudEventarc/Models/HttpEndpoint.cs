using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents a HTTP endpoint destination.
/// </summary>
public record HttpEndpoint
{
    /// <summary>
    /// Required. The URI of the HTTP endpoint. The value must be a RFC2396 URI string. Examples: <c>http://10.10.10.8:80/route</c>, <c>http://svc.us-central1.p.local:8080/</c>. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uri")]
    public string? Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
