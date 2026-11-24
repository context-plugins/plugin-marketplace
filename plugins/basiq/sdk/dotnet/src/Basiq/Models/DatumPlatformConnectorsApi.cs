using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Connector contains connector data.
/// </summary>
public record DatumPlatformConnectorsApi
{
    /// <summary>
    /// Resource type identifier. It is always "connector" for this model.
    /// connector ConnectorEntityType
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "connector";

    /// <summary>
    /// Institution ID
    /// </summary>
    [JsonPropertyName("id")]
    [StringLength(7, MinimumLength = 7)]
    [RegularExpression("^[A-Z]{2}[0-9]{5}$")]
    public required string Id { get; init; }

    /// <summary>
    /// Current Connector method
    /// </summary>
    [JsonPropertyName("method")]
    public required Method Method { get; init; }

    /// <summary>
    /// Current Connector stage
    /// </summary>
    [JsonPropertyName("stage")]
    public required string Stage { get; init; }

    /// <summary>
    /// FeatureCondition type that describes an feature status for institution
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// ConnectorInstitutionResource connector Institution  resource type
    /// </summary>
    [JsonPropertyName("institution")]
    public required Institution Institution { get; init; }

    /// <summary>
    /// Connector scopes array
    /// </summary>
    [JsonPropertyName("scopes")]
    public required IReadOnlyList<string> Scopes { get; init; }

    [JsonPropertyName("authorization")]
    public required Authorization Authorization { get; init; }

    /// <summary>
    /// InstitutionPerformanceStats response type for institution performance stats
    /// </summary>
    [JsonPropertyName("stats")]
    public required Stats Stats { get; init; }

    /// <summary>
    /// ResourceLinks contains resource links
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links1? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
