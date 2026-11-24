using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record ProtectiveEquipmentSummarizationAttributes
{
    /// <summary>
    /// The minimum confidence level for which you want summary information. The confidence level applies to person detection, body part detection, equipment detection, and body part coverage. Amazon Rekognition doesn't return summary information with a confidence than this specified value. There isn't a default value. Specify a MinConfidence value that is between 50-100% as DetectProtectiveEquipment returns predictions only where the detection confidence is between 50% - 100%. If you specify a value that is less than 50%, the results are the same specifying a value of 50%.
    /// </summary>
    [JsonPropertyName("MinConfidence")]
    public required double MinConfidence { get; init; }

    /// <summary>
    /// An array of personal protective equipment types for which you want summary information. If a person is detected wearing a required requipment type, the person's ID is added to the PersonsWithRequiredEquipment array field returned in ProtectiveEquipmentSummary by DetectProtectiveEquipment.
    /// </summary>
    [JsonPropertyName("RequiredEquipmentTypes")]
    public required IReadOnlyList<RequiredEquipmentType> RequiredEquipmentTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
