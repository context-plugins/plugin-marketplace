using System;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Endpoint
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adminSetState")]
    public AdminSetState? AdminSetState { get; init; }

    /// <summary>
    /// the unique id of the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentUUID")]
    public Guid? AgentUuid { get; init; }

    /// <summary>
    /// the unique id of the active user on the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userUUID")]
    public Guid? UserUuid { get; init; }

    /// <summary>
    /// the current version of the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agentVersion")]
    public string? AgentVersion { get; init; }

    /// <summary>
    /// type of ISA for computer processors
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("binaryType")]
    public string? BinaryType { get; init; }

    /// <summary>
    /// the name of the city where the endpoint is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cityName")]
    public string? CityName { get; init; }

    /// <summary>
    /// the name of the region where the endpoint is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// the name of the country where the endpoint is located
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryName")]
    public string? CountryName { get; init; }

    /// <summary>
    /// the type of CPU on the device hosting the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cpuFamily")]
    public string? CpuFamily { get; init; }

    /// <summary>
    /// indicates the debug state of the endpoint. 0 means not in debug, 1 means set to debug, 2 means acknowledged receipt of debug request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugState")]
    public string? DebugState { get; init; }

    /// <summary>
    /// the name of the device hosting the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceName")]
    public string? DeviceName { get; init; }

    /// <summary>
    /// indicates if the endpoint is disabled or not
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableMode")]
    public bool? DisableMode { get; init; }

    /// <summary>
    /// additional details regarding an error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorMessage")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// indicates if the endpoint is in fallback mode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fallbackMode")]
    public bool? FallbackMode { get; init; }

    /// <summary>
    /// the date and time when the endpoint last updated the configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configurationLastUpdated")]
    public DateTimeOffset? ConfigurationLastUpdated { get; init; }

    /// <summary>
    /// Operating System version of the device
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("osVersion")]
    public string? OsVersion { get; init; }

    /// <summary>
    /// name of the policy that is being used by the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policyName")]
    public string? PolicyName { get; init; }

    /// <summary>
    /// indicates if the endpoint has an active web-socket connection
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("realtimeConnection")]
    public bool? RealtimeConnection { get; init; }

    /// <summary>
    /// the current operational status of the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// the date and time when the endpoint was last seen
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSeen")]
    public DateTimeOffset? LastSeen { get; init; }

    /// <summary>
    /// the user id of the user that is using the endpoint. <c>userId</c> for OIDC users is usually their email address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

    /// <summary>
    /// the email of the user that is using the endpoint
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailId")]
    public string? EmailId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
