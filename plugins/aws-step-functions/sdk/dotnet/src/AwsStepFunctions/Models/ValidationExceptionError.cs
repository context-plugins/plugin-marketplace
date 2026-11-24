using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ValidationExceptionError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The input does not satisfy the constraints specified by an Amazon Web Services service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
