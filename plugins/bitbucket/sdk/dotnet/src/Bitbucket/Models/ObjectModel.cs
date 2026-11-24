using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

/// <summary>
/// Base type for most resource objects. It defines the common <c>type</c> element that identifies an object's type. It also identifies the element as Swagger's <c>discriminator</c>.
/// </summary>
public record ObjectModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
