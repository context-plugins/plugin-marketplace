using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record DiscoveryItem
{
    /// <summary>
    /// Either companyName or companyWebsite is mandatory
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public DiscoveryAccount? Account { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public DiscoveryContactCriteria? Contact { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredResultsFields")]
    public RequiredResultsFields? RequiredResultsFields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limits")]
    public Limits? Limits { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public Location? Location { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
