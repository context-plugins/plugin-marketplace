using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

/// <summary>
/// The context from which this event originated.
/// </summary>
public record AuditLogEventContext
{
    /// <summary>
    /// The type of context.
    /// Can be one of <c>web</c>, <c>desktop</c>, <c>mobile</c>, <c>asana_support</c>, <c>asana</c>, <c>email</c>, or <c>api</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context_type")]
    public ContextType? ContextType { get; init; }

    /// <summary>
    /// The authentication method used in the context of an API request.
    /// Only present if the <c>context_type</c> is <c>api</c>. Can be one of <c>cookie</c>, <c>oauth</c>, <c>personal_access_token</c>, or <c>service_account</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_authentication_method")]
    public ApiAuthenticationMethod? ApiAuthenticationMethod { get; init; }

    /// <summary>
    /// The IP address of the client that initiated the event, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_ip_address")]
    public string? ClientIpAddress { get; init; }

    /// <summary>
    /// The user agent of the client that initiated the event, if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_agent")]
    public string? UserAgent { get; init; }

    /// <summary>
    /// The name of the OAuth App that initiated the event.
    /// Only present if the <c>api_authentication_method</c> is <c>oauth</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauth_app_name")]
    public string? OauthAppName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
