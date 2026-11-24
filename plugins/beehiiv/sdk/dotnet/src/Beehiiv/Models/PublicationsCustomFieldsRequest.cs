using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record PublicationsCustomFieldsRequest
{
    /// <summary>
    /// The type of value being stored in the custom field.
    /// </summary>
    [JsonPropertyName("kind")]
    public required CustomFieldType Kind { get; init; }

    [JsonPropertyName("display")]
    public required string Display { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
