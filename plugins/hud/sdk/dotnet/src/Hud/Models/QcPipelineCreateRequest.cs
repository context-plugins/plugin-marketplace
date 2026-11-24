using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Register a team environment as a private DataVendor QC pipeline.
/// </summary>
public record QcPipelineCreateRequest
{
    [JsonPropertyName("asset_type")]
    [StringLength(100, MinimumLength = 1)]
    public required string AssetType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scope")]
    public ScopeHudPlatformChecksApi? Scope { get; init; } = ScopeHudPlatformChecksApi.Asset;

    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9]+(?:_[a-z0-9]+)*$")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    [StringLength(120, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonPropertyName("registry_id")]
    public required Guid RegistryId { get; init; }

    [JsonPropertyName("scenario_name")]
    [StringLength(200, MinimumLength = 1)]
    public required string ScenarioName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pass_threshold")]
    public PassThreshold? PassThreshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_price")]
    public CreditPrice? CreditPrice { get; init; }
}
