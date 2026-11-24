using System.Text.Json.Serialization;
using CommonElements.Core.Models;
using CommonElements.Core.Validation;
using CommonElements.Core.Validation.Attributes;
using CommonElements.Models.Enums;

namespace CommonElements.Models;

public record ErrorError
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "False";

    /// <summary>
    /// Stable machine-readable code. Switch on this, not on the message.
    /// </summary>
    [JsonPropertyName("error")]
    public required Error1 Error { get; init; }

    /// <summary>
    /// Human-readable detail. Wording may change; the code will not.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Where this code is explained in full. Present on the meta namespace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("docs_url")]
    [Format(FormatKind.Uri)]
    public string? DocsUrl { get; init; }

    /// <summary>
    /// What to do about it. Present on the meta namespace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_steps")]
    public string? NextSteps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
