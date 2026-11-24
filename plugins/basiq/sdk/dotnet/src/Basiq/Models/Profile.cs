using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Profile
{
    /// <summary>
    /// User email address
    /// </summary>
    [JsonPropertyName("emailAddresses")]
    public required IReadOnlyList<string> EmailAddresses { get; init; }

    /// <summary>
    /// User first name
    /// </summary>
    [JsonPropertyName("firstName")]
    public required string FirstName { get; init; }

    /// <summary>
    /// User full name
    /// </summary>
    [JsonPropertyName("fullName")]
    public required string FullName { get; init; }

    /// <summary>
    /// User last name
    /// </summary>
    [JsonPropertyName("lastName")]
    public required string LastName { get; init; }

    /// <summary>
    /// User middle name
    /// </summary>
    [JsonPropertyName("middleName")]
    public required string MiddleName { get; init; }

    /// <summary>
    /// User phone number
    /// </summary>
    [JsonPropertyName("phoneNumbers")]
    public required IReadOnlyList<string> PhoneNumbers { get; init; }

    /// <summary>
    /// Physical user addresses
    /// </summary>
    [JsonPropertyName("physicalAddresses")]
    public required IReadOnlyList<PhysicalAddresses> PhysicalAddresses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
