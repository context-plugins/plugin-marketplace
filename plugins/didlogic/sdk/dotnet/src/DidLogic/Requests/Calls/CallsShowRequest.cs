using System;
using System.ComponentModel.DataAnnotations;
using DidLogic.Core.Validation.Attributes;
using DidLogic.Models.Enums;

namespace DidLogic.Requests.Calls;

/// <summary>
/// The inputs of the CallsShow operation.
/// </summary>
public sealed record CallsShowRequest
{
    /// <summary>
    /// Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API calls, incoming = received calls)
    /// </summary>
    public Type1? Type { get; init; }

    /// <summary>
    /// Include missed calls in results (0 = exclude, 1 = include)
    /// </summary>
    public Missed? Missed { get; init; }

    /// <summary>
    /// Filter by caller phone number (partial match supported)
    /// </summary>
    public string? FromSearch { get; init; }

    /// <summary>
    /// Filter by destination phone number (partial match supported)
    /// </summary>
    public string? ToSearch { get; init; }

    /// <summary>
    /// Return only calls with this answering machine detection (AMD) verdict, matched ignoring case:
    /// - <c>machine</c> — AMD detected an answering machine
    /// - <c>human</c> — AMD detected a person
    /// - <c>notsure</c> — AMD ran but could not tell a machine from a person, for example on silence, unclear audio or a timeout
    /// <para>
    /// Only outbound calls carry a verdict, so <c>type=incoming</c> with this filter returns no calls.
    /// A value that no call has returns no calls.
    /// A malformed value, for example one with <c>|</c> or non-ASCII characters, is ignored, as if the parameter were not sent.
    /// </para>
    /// </summary>
    public string? AmdStatus { get; init; }

    /// <summary>
    /// Return only calls that ended this way, matched ignoring case:
    /// - <c>AMD_MACHINE</c> — AMD detected an answering machine; takes precedence over the other values
    /// - <c>NORMAL_CLEARING</c> — the call was answered
    /// - <c>NO_ANSWER</c> — nobody answered, including calls the caller cancelled before an answer
    /// - <c>BUSY</c> — the called party was busy
    /// - <c>FAILED</c> — the call could not be connected
    /// <para>
    /// A value that no call has returns no calls.
    /// A malformed value, for example one with <c>|</c> or non-ASCII characters, is ignored, as if the parameter were not sent.
    /// </para>
    /// </summary>
    public HangupCause1? HangupCause { get; init; }

    /// <summary>
    /// Filter by phone number (alphanumeric, spaces, hyphens, underscores)
    /// </summary>
    [RegularExpression("^[a-zA-Z0-9 \\-_]+$")]
    public string? Filter { get; init; }

    /// <summary>
    /// SIP account name from sipaccounts_index
    /// </summary>
    public string? SipAccount { get; init; }

    /// <summary>
    /// Start date for filtering (inclusive). Format YYYY-MM-DD
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// End date for filtering (inclusive). Format YYYY-MM-DD
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Return all records (ignores pagination). Use with caution for large datasets.
    /// </summary>
    public bool All { get; init; } = false;

    /// <summary>
    /// Page number to retrieve (1-based)
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// Number of records per page (max 1000)
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int PerPage { get; init; } = 100;
}
