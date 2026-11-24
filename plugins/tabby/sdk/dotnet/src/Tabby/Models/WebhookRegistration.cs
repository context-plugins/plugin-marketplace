using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

public record WebhookRegistration
{
    /// <summary>
    /// HTTPS endpoint for notifications. The URL should be valid and accessible (not local).
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("header")]
    public Header? Header { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
