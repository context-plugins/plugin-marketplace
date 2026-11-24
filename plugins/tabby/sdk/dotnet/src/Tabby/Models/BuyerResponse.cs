using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

/// <summary>
/// Customer information
/// </summary>
public record BuyerResponse
{
    /// <summary>
    /// Customer’s full name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    /// <summary>
    /// Customer’s email address.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string? Email { get; init; }

    /// <summary>
    /// Customer’s phone number. This must be a valid mobile phone where the consumer can receive text messages. The accepted phone masks are - <c>500000001</c>, <c>0500000001</c>, <c>+971500000001</c>, <c>971500000001</c>.
    /// </summary>
    [JsonPropertyName("phone")]
    public required string? Phone { get; init; }

    /// <summary>
    /// Customer's date of birth; format is YYYY-MM-DD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dob")]
    public DateTimeOffset? Dob { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
