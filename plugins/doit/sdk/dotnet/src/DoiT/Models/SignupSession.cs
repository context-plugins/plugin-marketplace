using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record SignupSession
{
    /// <summary>
    /// Firebase custom token for the tenant admin; exchange it with signInWithCustomToken.
    /// </summary>
    [JsonPropertyName("customToken")]
    public required string CustomToken { get; init; }

    [JsonPropertyName("tenantId")]
    public required string TenantId { get; init; }

    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consoleUrl")]
    [Format(FormatKind.Uri)]
    public string? ConsoleUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
