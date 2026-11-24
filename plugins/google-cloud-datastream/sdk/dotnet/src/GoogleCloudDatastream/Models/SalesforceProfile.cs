using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a Salesforce source.
/// </summary>
public record SalesforceProfile
{
    /// <summary>
    /// Connected app authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauth2ClientCredentials")]
    public Oauth2ClientCredentials1? Oauth2ClientCredentials { get; init; }

    /// <summary>
    /// Deprecated: Salesforce is retiring Username-Password authentication. Use <c>oauth2_client_credentials</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userCredentials")]
    public UserCredentials2? UserCredentials { get; init; }

    /// <summary>
    /// Required. Domain endpoint for the Salesforce connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
