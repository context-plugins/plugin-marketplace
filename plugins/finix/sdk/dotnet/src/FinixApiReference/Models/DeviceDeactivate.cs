using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record DeviceDeactivate
{
    /// <summary>
    /// The action you want to perform on the device. Use <b>DEACTIVATE</b> to deactivate the device.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "DEACTIVATE";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
