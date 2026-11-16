using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record PushToCardEligibility
{
    /// <summary>
    /// The acquiring processor. Use <c>DUMMY_V1</c> to use your sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
    /// </summary>
    [JsonPropertyName("processor")]
    public Processor3 Processor { get; init; } = Processor3.DummyV1;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
