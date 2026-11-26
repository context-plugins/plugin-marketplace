using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record UserUpdate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiryDate")]
    public DateTimeOffset? ExpiryDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
