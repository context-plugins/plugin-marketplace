using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Core.Validation;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

/// <summary>
/// Link to the steps of the Pipeline.
/// </summary>
public record PipelinesLinksSectionHref1Properties
{
    /// <summary>
    /// A link
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("href")]
    [Format(FormatKind.Uri)]
    public string? Href { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
