using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record WorkflowTypeDetail
{
    [JsonPropertyName("typeInfo")]
    public required WorkflowTypeInfo TypeInfo { get; init; }

    [JsonPropertyName("configuration")]
    public required WorkflowTypeConfiguration Configuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
