using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Core.Validation;
using Airtable.Core.Validation.Attributes;

namespace Airtable.Models;

public record Email1
{
    /// <summary>
    /// The email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    [Format(FormatKind.Email)]
    public string? Value { get; init; }

    /// <summary>
    /// The type of email (e.g., work).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Whether this is the primary email.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary")]
    public bool? Primary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
