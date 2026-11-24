using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Core.Validation;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

public record PipelineRunnerOauthClientProperties
{
    /// <summary>
    /// The OAuth client ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The OAuth client secret. This is an optional element that is only provided once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret")]
    public string? Secret { get; init; }

    /// <summary>
    /// The OAuth token endpoint URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token_endpoint")]
    [Format(FormatKind.Uri)]
    public string? TokenEndpoint { get; init; }

    /// <summary>
    /// The intended audience for the OAuth token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audience")]
    public string? Audience { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
