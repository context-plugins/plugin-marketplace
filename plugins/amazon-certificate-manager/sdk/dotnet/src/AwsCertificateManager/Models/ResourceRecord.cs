using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record ResourceRecord
{
    /// <summary>
    /// The name of the DNS record to create in your domain. This is supplied by ACM.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of DNS record. Currently this can be CNAME.
    /// </summary>
    [JsonPropertyName("Type")]
    public string Type { get; } = "CNAME";

    /// <summary>
    /// The value of the CNAME record to add to your DNS database. This is supplied by ACM.
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
