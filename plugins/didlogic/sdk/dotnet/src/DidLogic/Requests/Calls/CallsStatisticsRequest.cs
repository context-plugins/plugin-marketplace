using DidLogic.Models.Enums;

namespace DidLogic.Requests.Calls;

/// <summary>
/// The inputs of the CallsStatistics operation.
/// </summary>
public sealed record CallsStatisticsRequest
{
    /// <summary>
    /// Start date for filtering (YYYY-MM-DD)
    /// </summary>
    public string? From { get; init; }

    /// <summary>
    /// End date for filtering (YYYY-MM-DD)
    /// </summary>
    public string? To { get; init; }

    /// <summary>
    /// SIP account name from sipaccounts_index
    /// </summary>
    public string? Sipfriend { get; init; }

    /// <summary>
    /// Search term for filtering calls
    /// </summary>
    public int? Search { get; init; }

    /// <summary>
    /// Count only calls with this answering machine detection (AMD) verdict, matched ignoring case:
    /// - <c>machine</c> — AMD detected an answering machine
    /// - <c>human</c> — AMD detected a person
    /// - <c>notsure</c> — AMD ran but could not tell a machine from a person, for example on silence,
    ///   unclear audio or a timeout
    /// <para>
    /// Only outbound calls carry a verdict, so under this filter the received and missed counts
    /// and the received total are 0. A value that no call has gives zero counts and totals.
    /// A malformed value, for example one with <c>|</c> or non-ASCII characters, is ignored,
    /// as if the parameter were not sent.
    /// </para>
    /// </summary>
    public string? AmdStatus { get; init; }

    /// <summary>
    /// Count only calls that ended this way, matched ignoring case:
    /// - <c>AMD_MACHINE</c> — AMD detected an answering machine; takes precedence over the other values
    /// - <c>NORMAL_CLEARING</c> — the call was answered
    /// - <c>NO_ANSWER</c> — nobody answered, including calls the caller cancelled before an answer
    /// - <c>BUSY</c> — the called party was busy
    /// - <c>FAILED</c> — the call could not be connected
    /// <para>
    /// A value that no call has gives zero counts and totals.
    /// A malformed value, for example one with <c>|</c> or non-ASCII characters, is ignored,
    /// as if the parameter were not sent.
    /// </para>
    /// </summary>
    public HangupCause1? HangupCause { get; init; }
}
