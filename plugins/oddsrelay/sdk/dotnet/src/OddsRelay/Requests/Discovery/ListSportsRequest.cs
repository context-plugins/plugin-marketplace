using OddsRelay.Models.Enums;

namespace OddsRelay.Requests.Discovery;

/// <summary>
/// The inputs of the ListSports operation.
/// </summary>
public sealed record ListSportsRequest
{
    /// <summary>
    /// ONE lowercase region code (<c>/v2/regions</c> lists yours). Missing means <c>uk</c>: on a data route only when your key covers <c>uk</c>, else 400 <c>region_required</c> naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 <c>bad_request</c>; an unknown code, or one with no live bookmaker here, is 404 <c>unknown_region</c>.
    /// </summary>
    public string? Region { get; init; }

    /// <summary>
    /// <c>envelope</c> (default): <c>{meta, data}</c>. <c>bare</c>: the <c>data</c> array alone, <c>meta</c> moved to <c>X-*</c> headers.
    /// </summary>
    public Format Format { get; init; } = Format.Envelope;

    /// <summary>
    /// <c>iso</c> (default, ISO-8601 UTC) or <c>unix</c> (integer epoch seconds) for <c>commence_time</c>, <c>processed_at</c> and <c>last_update</c>. <c>standard</c> and <c>dutching</c> serve iso only: anything else is 400.
    /// </summary>
    public DateFormat DateFormat { get; init; } = DateFormat.Iso;

    /// <summary>
    /// The previous page's <c>meta.next_cursor</c> (or <c>X-Next-Cursor</c>). A cursor is bound to no account and expires 300 s after it was issued: 400 <c>cursor expired: start again from the first page</c>; any other shape 400 <c>cursor not recognised: start again from the first page</c>.
    /// </summary>
    public string? Cursor { get; init; }
}
