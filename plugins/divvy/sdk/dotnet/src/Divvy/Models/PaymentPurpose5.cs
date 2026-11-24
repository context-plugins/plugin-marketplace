using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

public record PaymentPurpose5
{
    /// <summary>
    /// Set as <c>true</c> if payment purpose information is required. If <c>required</c> is set as <c>false</c>, <c>paymentPurpose</c> information is not required in your create vendor or payment API request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public PaymentPurposeType? Type { get; init; }

    /// <summary>
    /// Available payment purpose codes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codes")]
    public IReadOnlyList<NameValue>? Codes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
