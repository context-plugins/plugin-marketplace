using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PutSlotTypeResponse
{
    /// <summary>
    /// The name of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A list of EnumerationValue objects that defines the values that the slot type can take.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumerationValues")]
    public IReadOnlyList<EnumerationValue>? EnumerationValues { get; init; }

    /// <summary>
    /// The date that the slot type was updated. When you create a slot type, the creation date and last update date are the same.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDate")]
    public DateTimeOffset? LastUpdatedDate { get; init; }

    /// <summary>
    /// The date that the slot type was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    /// <summary>
    /// The version of the slot type. For a new slot type, the version is always $LATEST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Checksum of the $LATEST version of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    /// <summary>
    /// The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueSelectionStrategy")]
    public ValueSelectionStrategy3? ValueSelectionStrategy { get; init; }

    /// <summary>
    /// True if a new version of the slot type was created. If the createVersion field was not specified in the request, the createVersion field is set to false in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createVersion")]
    public bool? CreateVersion { get; init; }

    /// <summary>
    /// The built-in slot type used as the parent of the slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentSlotTypeSignature")]
    public string? ParentSlotTypeSignature { get; init; }

    /// <summary>
    /// Configuration information that extends the parent built-in slot type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypeConfigurations")]
    public IReadOnlyList<SlotTypeConfiguration>? SlotTypeConfigurations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
