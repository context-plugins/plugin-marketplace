using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record Node
{
    /// <summary>
    /// The image ID used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_id")]
    public string? ImageId { get; init; }

    /// <summary>
    /// The SSH port
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// The public IP address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public_ip_addr")]
    public string? PublicIpAddr { get; init; }

    /// <summary>
    /// The SSH username
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
