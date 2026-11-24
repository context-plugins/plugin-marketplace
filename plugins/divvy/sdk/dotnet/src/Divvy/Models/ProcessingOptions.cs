using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record ProcessingOptions
{
    /// <summary>
    /// Set as <c>true</c> to send an email to the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sendEmail")]
    public bool? SendEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
