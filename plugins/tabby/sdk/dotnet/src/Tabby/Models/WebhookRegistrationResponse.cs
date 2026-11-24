using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

public record WebhookRegistrationResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header")]
    public Header3? Header { get; init; }

    /// <summary>
    /// Unique webhook ID, assigned by Tabby.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Indicates whether to use this hook in test environment or not.
    /// </summary>
    [JsonPropertyName("is_test")]
    public bool IsTest { get; init; } = false;

    /// <summary>
    /// HTTPS endpoint for notifications. The URL should be valid and accessible (not local).
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
