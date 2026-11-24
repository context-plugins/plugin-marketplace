using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

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
