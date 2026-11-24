using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record OrganizationHealthRequest
{
    /// <summary>
    /// The ID of the Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AccountIds")]
    public IReadOnlyList<string>? AccountIds { get; init; }

    /// <summary>
    /// The ID of the organizational unit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrganizationalUnitIds")]
    public IReadOnlyList<string>? OrganizationalUnitIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
