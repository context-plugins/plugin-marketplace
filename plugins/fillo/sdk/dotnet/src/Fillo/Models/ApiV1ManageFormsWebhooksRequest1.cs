using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsWebhooksRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeAbandoned")]
    public bool? IncludeAbandoned { get; init; }

    /// <summary>
    /// Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required, encrypted at rest, and never returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication")]
    public WebhookAuthenticationInput? Authentication { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
