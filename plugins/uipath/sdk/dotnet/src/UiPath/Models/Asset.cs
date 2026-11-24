using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A shared asset storing a value accessible to automation processes
/// </summary>
public record Asset
{
    /// <summary>
    /// Unique integer identifier of the asset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Display name of the asset
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// Data type of the asset value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ValueType")]
    public ValueTypeEnum? ValueType { get; init; }

    /// <summary>
    /// Value when ValueType is Text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StringValue")]
    public string? StringValue { get; init; }

    /// <summary>
    /// Value when ValueType is Integer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IntValue")]
    public int? IntValue { get; init; }

    /// <summary>
    /// Value when ValueType is Bool
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BoolValue")]
    public bool? BoolValue { get; init; }

    /// <summary>
    /// Username portion when ValueType is Credential
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CredentialUsername")]
    public string? CredentialUsername { get; init; }

    /// <summary>
    /// Password portion when ValueType is Credential (write-only)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CredentialPassword")]
    public string? CredentialPassword { get; init; }

    /// <summary>
    /// Optional description of the asset's purpose
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// ID of the folder in which this asset resides
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationUnitId")]
    public long? OrganizationUnitId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
