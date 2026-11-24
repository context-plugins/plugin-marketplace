using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record Contact
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("account_id")]
    public required string AccountId { get; init; }

    [JsonPropertyName("company_name")]
    public required string CompanyName { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("first_name_display")]
    public required string FirstNameDisplay { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("last_name_display")]
    public required string LastNameDisplay { get; init; }

    [JsonPropertyName("middle_name")]
    public required string MiddleName { get; init; }

    [JsonPropertyName("name_display")]
    public required string NameDisplay { get; init; }

    [JsonPropertyName("pronouns")]
    public required string Pronouns { get; init; }

    [JsonPropertyName("primary_email")]
    public required string PrimaryEmail { get; init; }

    [JsonPropertyName("primary_phone")]
    public required string PrimaryPhone { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
