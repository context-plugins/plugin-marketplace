using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record GatewayIntegration
{
    /// <summary>
    /// The email address to receive the Cybersource dashboard invitation, which lets you retrieve your Cybersource transacting credentials. If this field is not provided, the invitation will be sent to the email address associated with the merchant's email address defined in <see href="/api/identities">Identity</see> › <c>entity.email</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> resource the <c>Gateway Integration</c> is linked to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_to")]
    public string? LinkedTo { get; init; }

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
    /// The type of <c>Gateway Integration</c> to create. At this time, the only supported value is <c>CYBERSOURCE</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "CYBERSOURCE";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
