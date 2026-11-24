using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record BulkPersonResponse
{
    /// <summary>
    /// The contacts of the bulk person output, keyed by contactId
    /// </summary>
    [JsonPropertyName("contacts")]
    public required IReadOnlyDictionary<string, ContactResponse> Contacts { get; init; }

    /// <summary>
    /// The companies of the bulk person output, keyed by companyId
    /// </summary>
    [JsonPropertyName("companies")]
    public required IReadOnlyDictionary<string, CompanyResponse> Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
