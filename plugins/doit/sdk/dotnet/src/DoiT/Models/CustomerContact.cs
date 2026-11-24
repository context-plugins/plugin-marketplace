using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Customer point-of-contact details. Shared by the <c>getCustomer</c> response and the <c>updateCustomer</c> request body so a value is always read and written at the same path.
/// </summary>
public record CustomerContact
{
    /// <summary>
    /// Point-of-contact email addresses for the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public IReadOnlyList<string>? Emails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
