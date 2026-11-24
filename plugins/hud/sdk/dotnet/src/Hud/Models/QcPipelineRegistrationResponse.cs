using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// A team-owned environment pipeline available to DataVendor.
/// </summary>
public record QcPipelineRegistrationResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("owner_team_id")]
    public required Guid OwnerTeamId { get; init; }

    [JsonPropertyName("asset_type")]
    public required string AssetType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind? Kind { get; init; } = Kind.Environment;

    [JsonPropertyName("scope")]
    public required ScopeHudPlatformChecksApi Scope { get; init; }

    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("description")]
    public required Description Description { get; init; }

    [JsonPropertyName("registry_id")]
    public required Guid RegistryId { get; init; }

    [JsonPropertyName("scenario_name")]
    public required string ScenarioName { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("pass_threshold")]
    public required double PassThreshold { get; init; }

    [JsonPropertyName("credit_price")]
    public required double CreditPrice { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
