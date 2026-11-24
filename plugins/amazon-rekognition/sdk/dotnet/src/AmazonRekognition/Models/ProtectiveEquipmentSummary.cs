using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record ProtectiveEquipmentSummary
{
    /// <summary>
    /// An array of IDs for persons who are wearing detected personal protective equipment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PersonsWithRequiredEquipment")]
    public IReadOnlyList<int>? PersonsWithRequiredEquipment { get; init; }

    /// <summary>
    /// An array of IDs for persons who are not wearing all of the types of PPE specified in the RequiredEquipmentTypes field of the detected personal protective equipment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PersonsWithoutRequiredEquipment")]
    public IReadOnlyList<int>? PersonsWithoutRequiredEquipment { get; init; }

    /// <summary>
    /// An array of IDs for persons where it was not possible to determine if they are wearing personal protective equipment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PersonsIndeterminate")]
    public IReadOnlyList<int>? PersonsIndeterminate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
