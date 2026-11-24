using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Parameters to support Username and Password Authentication.
/// </summary>
public record GoogleCloudApihubV1UserPasswordConfig
{
    /// <summary>
    /// Required. Secret version reference containing the password. The <c>secretmanager.versions.access</c> permission should be granted to the service account accessing the secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public GoogleCloudApihubV1Secret3? Password { get; init; }

    /// <summary>
    /// Required. Username.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
