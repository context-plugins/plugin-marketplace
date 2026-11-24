using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Name
{
    /// <summary>
    /// The user's first name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("givenName")]
    public string? GivenName { get; init; }

    /// <summary>
    /// The user's last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("familyName")]
    public string? FamilyName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
