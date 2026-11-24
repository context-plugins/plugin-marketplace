using System;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Core.Validation;
using Lili.Core.Validation.Attributes;

namespace Lili.Models;

public record UboResponseData
{
    /// <summary>
    /// The UBO email
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// A unique ID for the UBO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uboId")]
    public Guid? UboId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
