using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record AdditionalHealthcareData
{
    /// <summary>
    /// A clinic or other qualified medical amount for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clinic_amount")]
    public int? ClinicAmount { get; init; }

    /// <summary>
    /// The dental amount for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dental_amount")]
    public int? DentalAmount { get; init; }

    /// <summary>
    /// The prescription/RX amount for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prescription_amount")]
    public int? PrescriptionAmount { get; init; }

    /// <summary>
    /// The vision/optical amount for the transaction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vision_amount")]
    public int? VisionAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
