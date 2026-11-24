using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record Project
{
    /// <summary>
    /// The unique ID of the project.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the project.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The slug of the project.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The logo of the project.
    /// </summary>
    [JsonPropertyName("logo")]
    public required string? Logo { get; init; }

    /// <summary>
    /// The usage of the project.
    /// </summary>
    [JsonPropertyName("usage")]
    public required double Usage { get; init; }

    /// <summary>
    /// The usage limit of the project.
    /// </summary>
    [JsonPropertyName("usageLimit")]
    public required double UsageLimit { get; init; }

    /// <summary>
    /// The links usage of the project.
    /// </summary>
    [JsonPropertyName("linksUsage")]
    public required double LinksUsage { get; init; }

    /// <summary>
    /// The links limit of the project.
    /// </summary>
    [JsonPropertyName("linksLimit")]
    public required double LinksLimit { get; init; }

    /// <summary>
    /// The domains limit of the project.
    /// </summary>
    [JsonPropertyName("domainsLimit")]
    public required double DomainsLimit { get; init; }

    /// <summary>
    /// The tags limit of the project.
    /// </summary>
    [JsonPropertyName("tagsLimit")]
    public required double TagsLimit { get; init; }

    /// <summary>
    /// The users limit of the project.
    /// </summary>
    [JsonPropertyName("usersLimit")]
    public required double UsersLimit { get; init; }

    /// <summary>
    /// The plan of the project.
    /// </summary>
    [JsonPropertyName("plan")]
    public required Plan Plan { get; init; }

    /// <summary>
    /// The Stripe ID of the project.
    /// </summary>
    [JsonPropertyName("stripeId")]
    public required string? StripeId { get; init; }

    /// <summary>
    /// The date and time when the billing cycle starts for the project.
    /// </summary>
    [JsonPropertyName("billingCycleStart")]
    public required double BillingCycleStart { get; init; }

    /// <summary>
    /// [BETA]: The Stripe Connect ID of the project.
    /// </summary>
    [JsonPropertyName("stripeConnectId")]
    public required string? StripeConnectId { get; init; }

    /// <summary>
    /// The date and time when the project was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The role of the authenticated user in the project.
    /// </summary>
    [JsonPropertyName("users")]
    public required IReadOnlyList<User> Users { get; init; }

    /// <summary>
    /// The domains of the project.
    /// </summary>
    [JsonPropertyName("domains")]
    public required IReadOnlyList<Domain> Domains { get; init; }

    [JsonPropertyName("metadata")]
    public required Metadata Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
