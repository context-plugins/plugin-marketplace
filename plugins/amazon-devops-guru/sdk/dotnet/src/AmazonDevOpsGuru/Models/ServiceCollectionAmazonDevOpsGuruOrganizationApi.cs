using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ServiceCollectionAmazonDevOpsGuruOrganizationApi
{
    /// <summary>
    /// An array of strings that each specifies the name of an Amazon Web Services service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceNames")]
    public IReadOnlyList<ServiceName1>? ServiceNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
