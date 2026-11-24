using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UserData
{
    /// <summary>
    /// Unique id to identify the user
    /// </summary>
    [JsonPropertyName("user_id")]
    public required string UserId { get; init; }

    /// <summary>
    /// User's email used to identify the user on the dashboard / target audiences
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// User's name used to identify the user on the dashboard / target audiences
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// User's language in ISO 639-1 format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    [MaxLength(2)]
    public string? Language { get; init; }

    /// <summary>
    /// User's country in ISO 3166 alpha-2 format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    [MaxLength(2)]
    public string? Country { get; init; }

    /// <summary>
    /// App Version of the running application
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appVersion")]
    public string? AppVersion { get; init; }

    /// <summary>
    /// App Build number of the running application
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appBuild")]
    public string? AppBuild { get; init; }

    /// <summary>
    /// User's custom data to target the user with, data will be logged to DevCycle for use in dashboard.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customData")]
    public object? CustomData { get; init; }

    /// <summary>
    /// User's custom data to target the user with, data will not be logged to DevCycle only used for feature bucketing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateCustomData")]
    public object? PrivateCustomData { get; init; }

    /// <summary>
    /// Date the user was created, Unix epoch timestamp format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public double? CreatedDate { get; init; }

    /// <summary>
    /// Date the user was created, Unix epoch timestamp format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSeenDate")]
    public double? LastSeenDate { get; init; }

    /// <summary>
    /// Platform the Client SDK is running on
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    /// <summary>
    /// Version of the platform the Client SDK is running on
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platformVersion")]
    public string? PlatformVersion { get; init; }

    /// <summary>
    /// User's device model
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceModel")]
    public string? DeviceModel { get; init; }

    /// <summary>
    /// DevCycle SDK type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdkType")]
    public SdkType? SdkType { get; init; }

    /// <summary>
    /// DevCycle SDK Version
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdkVersion")]
    public string? SdkVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
