using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using RocketReach.Core.Validation;
using RocketReach.Core.Validation.Attributes;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CreateUniversalPersonLookup operation.
/// </summary>
public sealed record CreateUniversalPersonLookupRequest
{
    /// <summary>
    /// Current employer of the desired profile. Must specify along with <c>name</c>.
    /// - Example: <c>RocketReach</c>
    /// </summary>
    [MinLength(1)]
    public string? CurrentEmployer { get; init; }

    /// <summary>
    /// An email address for the desired profile.
    /// - Example: <c>jamie@rocketreach.co</c>
    /// </summary>
    [MinLength(1)]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// RocketReach internal unique profile ID.
    /// - Example: <c>123456</c>
    /// </summary>
    public int? Id { get; init; }

    /// <summary>
    /// linkedin_ext_url deprecated, please use <c>linkedin_url</c> instead
    /// </summary>
    [MinLength(1)]
    [RegularExpression("")]
    public string? LinkedinExtUrl { get; init; }

    /// <summary>
    /// LinkedIn URL of the desired profile.
    /// - Example: <c>www.linkedin.com/in/jamesgullbrand</c>
    /// </summary>
    [MinLength(1)]
    [RegularExpression("")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// User metadata about the profile, such as external ids, tags, notes, etc.
    /// </summary>
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// Name of the desired profile. Must specify along with <c>current_employer</c>.
    /// - Example: <c>Jamie Gullbrand</c>
    /// </summary>
    [MinLength(1)]
    public string? Name { get; init; }

    /// <summary>
    /// An NPI number for the desired profile (US healthcare professional).
    /// - Example: <c>1234567890</c>
    /// </summary>
    public int? NpiNumber { get; init; }

    /// <summary>
    /// A phone number for the desired profile in either E.164 format or international format.
    /// - Example: <c>+15555555555</c>
    /// </summary>
    [MinLength(1)]
    public string? Phone { get; init; }

    /// <summary>
    /// Controls whether cached emails are included in the initial response when <c>lookup status = progress</c>. When set to <c>false</c>, all email fields will be null until the lookup is complete and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed response with fully verified emails (<c>status = complete</c>). Defaults to <c>true</c>.
    /// <para>
    /// &lt;b&gt;NOTE: Default will change to false on September 1st, 2026. No cached emails will be returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified emails.&lt;/b&gt;
    /// </para>
    /// </summary>
    public bool ReturnCachedEmails { get; init; } = true;

    /// <summary>
    /// Whether to reveal the detailed person enrichment data for the desired profile
    /// </summary>
    public bool RevealDetailedPersonEnrichment { get; init; } = false;

    /// <summary>
    /// Whether to reveal the healthcare enrichment data for the desired profile
    /// </summary>
    public bool RevealHealthcareEnrichment { get; init; } = false;

    /// <summary>
    /// Whether to reveal the personal email enrichment data for the desired profile
    /// </summary>
    public bool RevealPersonalEmail { get; init; } = false;

    /// <summary>
    /// Whether to reveal the phone enrichment data for the desired profile
    /// </summary>
    public bool RevealPhone { get; init; } = false;

    /// <summary>
    /// Whether to reveal the professional email enrichment data for the desired profile
    /// </summary>
    public bool RevealProfessionalEmail { get; init; } = false;

    /// <summary>
    /// Job title of the desired profile.
    /// - Example: <c>Product Manager</c>
    /// </summary>
    [MinLength(1)]
    public string? Title { get; init; }

    /// <summary>
    /// Your webhook's unique ID number. Find it in your API Usage &amp; Settings page.
    /// </summary>
    public int? WebhookId { get; init; }
}
