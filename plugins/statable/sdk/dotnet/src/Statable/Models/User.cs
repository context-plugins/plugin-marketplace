using System;
using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation;
using Statable.Core.Validation.Attributes;

namespace Statable.Models;

public record User
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
