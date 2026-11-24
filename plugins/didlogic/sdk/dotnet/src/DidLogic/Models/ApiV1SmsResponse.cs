using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SmsResponse
{
    [JsonPropertyName("pagination")]
    public required PaginationDidlogicComPurchasesApi Pagination { get; init; }

    /// <summary>
    /// List of SMS messages
    /// </summary>
    [JsonPropertyName("sms")]
    public required IReadOnlyList<Sm> Sms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
