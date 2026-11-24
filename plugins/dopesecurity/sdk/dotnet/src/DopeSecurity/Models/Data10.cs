using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.AnyOf;

namespace DopeSecurity.Models;

public record Data10
{
    [JsonPropertyName("sslInspection")]
    public required SslInspection1 SslInspection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
