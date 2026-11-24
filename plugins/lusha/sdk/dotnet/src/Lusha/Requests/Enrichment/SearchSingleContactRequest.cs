using System;
using System.Collections.Generic;
using Lusha.Models.Enums;

namespace Lusha.Requests.Enrichment;

/// <summary>
/// The inputs of the SearchSingleContact operation.
/// </summary>
public sealed record SearchSingleContactRequest
{
    /// <summary>
    /// The first name of the person
    /// </summary>
    public string? FirstName { get; init; }

    /// <summary>
    /// The last name of the person
    /// </summary>
    public string? LastName { get; init; }

    /// <summary>
    /// The unique person identifier in Lusha
    /// </summary>
    public string? PersonId { get; init; }

    /// <summary>
    /// The name of the company the person works at
    /// </summary>
    public string? CompanyName { get; init; }

    /// <summary>
    /// The domain name of the company
    /// </summary>
    public string? CompanyDomain { get; init; }

    /// <summary>
    /// The email address of the person
    /// </summary>
    public string? Email { get; init; }

    /// <summary>
    /// The LinkedIn URL of the person
    /// </summary>
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// Set to true to refresh and update the job details for the person.
    /// This ensures that outdated job information is replaced with the most recent data.
    /// </summary>
    public bool RefreshJobInfo { get; init; } = false;

    /// <summary>
    /// Filters results based on specific contact details. Available options:
    /// - <c>phoneNumbers</c>: Only return contacts with phone numbers
    /// - <c>emailAddresses</c>: Only return contacts with email addresses
    /// <para>
    /// By default, results will include contacts with at least one contact detail.
    /// </para>
    /// </summary>
    public FilterBy? FilterBy { get; init; }

    /// <summary>
    /// Set <c>revealEmails=true</c> to retrieve only the email address of the contact.
    /// </summary>
    public bool RevealEmails { get; init; } = true;

    /// <summary>
    /// Set <c>revealPhones=true</c> to retrieve only the phone number of the contact.
    /// </summary>
    public bool RevealPhones { get; init; } = true;

    /// <summary>
    /// Array of signal types to retrieve for the contact.
    /// - <c>allSignals</c>: All available signal types
    /// - <c>promotion</c>: Promotion signals
    /// - <c>companyChange</c>: Company change signals
    /// </summary>
    public IReadOnlyList<Signal>? Signals { get; init; }

    /// <summary>
    /// Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified.
    /// </summary>
    public DateTimeOffset? SignalsStartDate { get; init; }

    /// <summary>
    /// Search for a single contact with the option to receive a partial profile.
    /// </summary>
    public bool PartialProfile { get; init; } = false;
}
