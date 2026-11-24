using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record RemoveCustomFieldSettingRequest
{
    /// <summary>
    /// The custom field to remove from this portfolio.
    /// </summary>
    [JsonPropertyName("custom_field")]
    public required string CustomField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
