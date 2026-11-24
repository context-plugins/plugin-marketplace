using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Required. Specifies the OAuth Refresh Token.
/// </summary>
public record Secret3
{
    /// <summary>
    /// Optional. Input only. The actual raw value of the secret as plain text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawValue")]
    public string? RawValue { get; init; }

    /// <summary>
    /// Optional. A Secret Manager resource name storing the actual value of the secret. Supported formats: * projects/{project}/locations/{location}/secrets/{secret}/versions/{version} * projects/{project}/secrets/{secret}/versions/{version}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretVersion")]
    public string? SecretVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
