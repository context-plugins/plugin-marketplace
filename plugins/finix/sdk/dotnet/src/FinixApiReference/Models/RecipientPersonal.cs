using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record RecipientPersonal
{
    /// <summary>
    /// Identifying information about the recipient.
    /// </summary>
    [JsonPropertyName("entity")]
    public required Entity4 Entity { get; init; }

    /// <summary>
    /// The set of roles available to the <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_roles")]
    public IReadOnlyList<IdentityRole3>? IdentityRoles { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// The identity type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type14? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
