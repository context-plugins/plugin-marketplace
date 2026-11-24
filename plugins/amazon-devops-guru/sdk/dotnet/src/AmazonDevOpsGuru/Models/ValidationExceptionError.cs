using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ValidationExceptionError
{
    /// <summary>
    /// A message that describes the validation exception.
    /// </summary>
    [JsonPropertyName("Message")]
    public required string Message { get; init; }

    /// <summary>
    /// The reason the validation exception was thrown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reason")]
    public Reason? Reason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Fields")]
    public IReadOnlyList<ValidationExceptionField>? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
