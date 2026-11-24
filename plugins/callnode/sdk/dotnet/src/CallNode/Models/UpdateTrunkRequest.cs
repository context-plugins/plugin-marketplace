using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Models.Enums;

namespace CallNode.Models;

/// <summary>
/// Any subset of the fields below. Send <c>egressHost</c> as <c>null</c> or <c>""</c> to
/// clear it (ingress-only). A request with no recognized fields returns
/// <c>no_fields</c>.
/// </summary>
public record UpdateTrunkRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(64, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Null or empty string clears egress delivery.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressHost")]
    public string? EgressHost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressPort")]
    public int? EgressPort { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressTransport")]
    public EgressTransport? EgressTransport { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusCallnodeIoSipTrunksApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("egressEnabled")]
    public bool? EgressEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowedIps")]
    public IReadOnlyList<string>? AllowedIps { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingressEnabled")]
    public bool? IngressEnabled { get; init; }

    /// <summary>
    /// Turning this on for the first time mints credentials and returns
    /// <c>sipPassword</c> once in the response. Turning it off keeps the
    /// credentials on file so re-enabling does not disturb a configured PBX.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registrationEnabled")]
    public bool? RegistrationEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultPhoneNumberId")]
    public string? DefaultPhoneNumberId { get; init; }

    /// <summary>
    /// Null clears the trunk-level outbound caller ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outboundCliNumberId")]
    public string? OutboundCliNumberId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
