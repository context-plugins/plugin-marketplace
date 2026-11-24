using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PublishValueReceiptBody
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishExpiresAt")]
    public DateTimeOffset? PublishExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
