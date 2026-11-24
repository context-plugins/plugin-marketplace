using System;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerGroupDeleteResponse
{
    [JsonPropertyName("deletedGroupId")]
    public required Guid DeletedGroupId { get; init; }

    [JsonPropertyName("unboundCustomerCount")]
    public required int UnboundCustomerCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
