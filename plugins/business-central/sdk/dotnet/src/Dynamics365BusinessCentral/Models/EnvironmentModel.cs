using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Core.Validation;
using Dynamics365BusinessCentral.Core.Validation.Attributes;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record EnvironmentModel
{
    /// <summary>
    /// Display name of the environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("friendlyName")]
    public string? FriendlyName { get; init; }

    /// <summary>
    /// Environment type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type2? Type { get; init; }

    /// <summary>
    /// Environment name, unique within an application family
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Country/region code where the environment is deployed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    public string? CountryCode { get; init; }

    /// <summary>
    /// Family of the environment application
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationFamily")]
    public string? ApplicationFamily { get; init; }

    /// <summary>
    /// Microsoft Entra tenant ID that owns the environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aadTenantId")]
    public Guid? AadTenantId { get; init; }

    /// <summary>
    /// Current status of the environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1? Status { get; init; }

    /// <summary>
    /// URL to log into the environment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webClientLoginUrl")]
    [Format(FormatKind.Uri)]
    public string? WebClientLoginUrl { get; init; }

    /// <summary>
    /// URL to access the environment service API
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webServiceUrl")]
    [Format(FormatKind.Uri)]
    public string? WebServiceUrl { get; init; }

    /// <summary>
    /// Azure region where the database is stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationName")]
    public string? LocationName { get; init; }

    /// <summary>
    /// Azure geo where the database is stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geoName")]
    public string? GeoName { get; init; }

    /// <summary>
    /// Logical ring group name (e.g., Prod, Preview)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ringName")]
    public string? RingName { get; init; }

    /// <summary>
    /// Application Insights instrumentation key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appInsightsKey")]
    public string? AppInsightsKey { get; init; }

    /// <summary>
    /// When the environment was soft deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("softDeletedOn")]
    public DateTimeOffset? SoftDeletedOn { get; init; }

    /// <summary>
    /// When the environment will be permanently deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hardDeletePendingOn")]
    public DateTimeOffset? HardDeletePendingOn { get; init; }

    /// <summary>
    /// Reason the environment was deleted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteReason")]
    public string? DeleteReason { get; init; }

    /// <summary>
    /// Update cadence for installed AppSource apps
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appSourceAppsUpdateCadence")]
    public string? AppSourceAppsUpdateCadence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionDetails")]
    public VersionDetails? VersionDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
