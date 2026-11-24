using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record Error
{
    [JsonPropertyName("message")]
    public string Message { get; } = "This campaign has already raised money, and can not be deleted.";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
