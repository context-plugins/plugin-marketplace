using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Core.Validation;
using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Models;

public record Email
{
    /// <summary>
    /// The email address value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [Format(FormatKind.Email)]
    public string? Value { get; init; }

    /// <summary>
    /// Indicates whether this is the primary email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary")]
    public bool? Primary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
