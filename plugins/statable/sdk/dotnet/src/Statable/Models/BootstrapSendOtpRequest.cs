using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Core.Validation;
using Statable.Core.Validation.Attributes;

namespace Statable.Models;

public record BootstrapSendOtpRequest
{
    /// <summary>
    /// The address that will receive the code and own the account.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
