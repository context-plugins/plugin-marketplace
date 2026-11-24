using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record DataCommonelementsComVendorsApi
{
    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtype")]
    public string? Subtype { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zip")]
    public string? Zip { get; init; }

    /// <summary>
    /// Vendor identity and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website")]
    public string? Website { get; init; }

    /// <summary>
    /// Always "verified" for a row this endpoint returns.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verification_status")]
    public string? VerificationStatus { get; init; }

    /// <summary>
    /// States the vendor reports serving.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_states")]
    public IReadOnlyList<string>? ServiceStates { get; init; }

    /// <summary>
    /// Platform review summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_count")]
    public double? ReviewCount { get; init; }

    /// <summary>
    /// Platform review summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_avg_rating")]
    public double? ReviewAvgRating { get; init; }

    /// <summary>
    /// Vendor-self-asserted display fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Vendor-self-asserted display fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license_number")]
    public string? LicenseNumber { get; init; }

    /// <summary>
    /// Vendor-self-asserted display fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insurance_carrier")]
    public string? InsuranceCarrier { get; init; }

    /// <summary>
    /// Vendor-self-asserted display fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team_size")]
    public string? TeamSize { get; init; }

    /// <summary>
    /// Vendor-self-asserted display fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("booth_tagline")]
    public string? BoothTagline { get; init; }

    /// <summary>
    /// Vendor-self-asserted service scope and credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("services_offered")]
    public IReadOnlyList<string>? ServicesOffered { get; init; }

    /// <summary>
    /// Vendor-self-asserted service scope and credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("certifications")]
    public IReadOnlyList<string>? Certifications { get; init; }

    /// <summary>
    /// Vendor-self-asserted service scope and credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_categories")]
    public IReadOnlyList<string>? ServiceCategories { get; init; }

    /// <summary>
    /// Vendor-self-asserted service scope and credentials.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_counties")]
    public IReadOnlyList<string>? ServiceCounties { get; init; }

    /// <summary>
    /// Published offering posts: id, title, body, category_slugs, service_states, service_counties, pinned, published_at.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_offerings")]
    public IReadOnlyList<object>? ServiceOfferings { get; init; }

    /// <summary>
    /// Independently-sourced, public-record credential facts (FL workers'-comp status, professional licenses, enforcement count). Null when the vendor has no confirmed public-record match — this is the verified boundary, distinct from the self-asserted fields above.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trust_profile")]
    public object? TrustProfile { get; init; }

    /// <summary>
    /// When the vendor record was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
