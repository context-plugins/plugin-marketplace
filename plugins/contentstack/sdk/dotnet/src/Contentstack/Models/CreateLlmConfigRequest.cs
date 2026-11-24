using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation;
using Contentstack.Core.Validation.Attributes;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// Parameters for configuring custom LLM credentials.
/// </summary>
public record CreateLlmConfigRequest
{
    /// <summary>
    /// Name of the LLM provider.
    /// </summary>
    [JsonPropertyName("provider")]
    public required Provider Provider { get; init; }

    /// <summary>
    /// The LLM model identifier to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// API key for authenticating with the LLM provider.
    /// </summary>
    [JsonPropertyName("api_key")]
    public required string ApiKey { get; init; }

    /// <summary>
    /// Custom endpoint URL for Azure OpenAI or self-hosted deployments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    [Format(FormatKind.Uri)]
    public string? Endpoint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
