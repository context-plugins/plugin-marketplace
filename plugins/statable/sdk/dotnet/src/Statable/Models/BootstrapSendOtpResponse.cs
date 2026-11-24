using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation;
using Statable.Core.Validation.Attributes;

namespace Statable.Models;

public record BootstrapSendOtpResponse
{
    /// <summary>
    /// Always true. Says nothing about whether the account existed.
    /// </summary>
    [JsonPropertyName("sent")]
    public required bool Sent { get; init; }

    /// <summary>
    /// The normalized (lower-cased, trimmed) address.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
