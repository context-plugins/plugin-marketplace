using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record CreateSignupRequest
{
    /// <summary>
    /// A signup's own fields, as collected by the form. They are written to the
    /// customer's warehouse and never stored by Hightouch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traits")]
    public IReadOnlyDictionary<string, SignupTraitsRequest>? Traits { get; init; }

    /// <summary>
    /// Force an opt-in style. Omit to let the topic and channel decide; a value
    /// they cannot honor is refused rather than silently resolved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("optIn")]
    public OptIn? OptIn { get; init; }

    /// <summary>
    /// Which form or landing page this signup came from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topicExternalIdentifier")]
    public string? TopicExternalIdentifier { get; init; }

    /// <summary>
    /// The subscription topic being consented to, by id or external identifier.
    /// Omit both to record consent for the channel itself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topicId")]
    public string? TopicId { get; init; }

    /// <summary>
    /// Delivery channels a signup can consent on.
    /// </summary>
    [JsonPropertyName("channel")]
    public required SignupChannel Channel { get; init; }

    /// <summary>
    /// Email address or E.164 phone number, matching <c>channel</c>.
    /// </summary>
    [JsonPropertyName("handle")]
    public required string Handle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
