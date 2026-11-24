using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record HttpDataSourceConfig
{
    /// <summary>
    /// The HTTP URL endpoint. You can specify either the domain name or IP, and port combination, and the URL scheme must be HTTP or HTTPS. If you don't specify the port, AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public string? Endpoint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizationConfig")]
    public AuthorizationConfig? AuthorizationConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
