using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1Developer
{
    /// <summary>
    /// Required. User name of the developer. Not used by Apigee hybrid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userName")]
    public string? UserName { get; init; }

    /// <summary>
    /// Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Access type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessType")]
    public string? AccessType { get; init; }

    /// <summary>
    /// Output only. Time at which the developer was last modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Output only. Time at which the developer was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Required. First name of the developer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Output only. Name of the Apigee organization in which the developer resides.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationName")]
    public string? OrganizationName { get; init; }

    /// <summary>
    /// ID of the developer. <b>Note</b>: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developerId")]
    public string? DeveloperId { get; init; }

    /// <summary>
    /// List of companies associated with the developer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<string>? Companies { get; init; }

    /// <summary>
    /// Developer app family.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appFamily")]
    public string? AppFamily { get; init; }

    /// <summary>
    /// Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// Output only. Status of the developer. Valid values are <c>active</c> and <c>inactive</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Required. Last name of the developer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// List of apps associated with the developer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apps")]
    public IReadOnlyList<string>? Apps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
