using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Validation;
using MicrosoftDynamicsNav.Core.Validation.Attributes;

namespace MicrosoftDynamicsNav.Models;

public record SupportSettings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appId")]
    public Guid? AppId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportUrl")]
    [Format(FormatKind.Uri)]
    public string? SupportUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportEmail")]
    [Format(FormatKind.Email)]
    public string? SupportEmail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportPhone")]
    public string? SupportPhone { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
