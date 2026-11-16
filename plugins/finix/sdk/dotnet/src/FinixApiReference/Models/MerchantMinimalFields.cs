using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantMinimalFields
{
    /// <summary>
    /// Set the acquiring processor. Use <c>DUMMY_V1</c> or <c>null</c> for your Sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
    /// </summary>
    [JsonPropertyName("processor")]
    public required ProcessorRequest Processor { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
