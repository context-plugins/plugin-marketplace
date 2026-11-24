using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Core.Validation;
using Fillo.Core.Validation.Attributes;

namespace Fillo.Models;

public record ApiV1ManageFormsWebhooksRequest
{
    /// <summary>
    /// An http(s) delivery URL.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Also deliver draft.abandoned events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeAbandoned")]
    public bool? IncludeAbandoned { get; init; } = false;

    /// <summary>
    /// Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at rest, and never returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public WebhookAuthenticationInput? Authentication { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
