using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Core.Validation;
using Airtable.Core.Validation.Attributes;

namespace Airtable.Models;

/// <summary>
/// The user who created the comment.
/// </summary>
public record Author
{
    /// <summary>
    /// The user ID of the comment author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The email address of the comment author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// The display name of the comment author.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
