using System.Text.Json.Serialization;
using Bitbucket.Core.Validation;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

/// <summary>
/// A link to a resource related to this object.
/// </summary>
public record Link
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    [Format(FormatKind.Uri)]
    public string? Href { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }
}
