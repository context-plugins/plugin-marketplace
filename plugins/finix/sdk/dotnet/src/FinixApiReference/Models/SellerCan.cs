using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record SellerCan
{
    /// <summary>
    /// Additional underwriting data about the user.
    /// </summary>
    [JsonPropertyName("additional_underwriting_data")]
    public required AdditionalUnderwritingData2 AdditionalUnderwritingData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entity")]
    public Entity2? Entity { get; init; }

    /// <summary>
    /// The set of roles available to the <c>Identity</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity_roles")]
    public IReadOnlyList<IdentityRole1>? IdentityRoles { get; init; }

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
    public Type11? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
