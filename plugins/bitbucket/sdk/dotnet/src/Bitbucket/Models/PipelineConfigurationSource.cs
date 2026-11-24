using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Core.Validation;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

/// <summary>
/// Information about the source of the pipeline configuration
/// </summary>
public record PipelineConfigurationSource
{
    /// <summary>
    /// Identifier of the configuration source
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// Link to the configuration source view or its immediate content
    /// </summary>
    [JsonPropertyName("uri")]
    [Format(FormatKind.Uri)]
    public required string Uri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
