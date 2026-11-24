using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Whether or not Google could retrieve the page from your server. Equivalent to <see href="https://support.google.com/webmasters/answer/9012289#index_coverage">"page fetch"</see> in the URL inspection report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PageFetchState>))]
public sealed record PageFetchState : OpenStringEnum<PageFetchState>
{
    private PageFetchState(string value) : base(value)
    {
    }

    public static readonly PageFetchState PageFetchStateUnspecified = new("PAGE_FETCH_STATE_UNSPECIFIED");

    public static readonly PageFetchState Successful = new("SUCCESSFUL");

    public static readonly PageFetchState Soft404 = new("SOFT_404");

    public static readonly PageFetchState BlockedRobotsTxt = new("BLOCKED_ROBOTS_TXT");

    public static readonly PageFetchState NotFound = new("NOT_FOUND");

    public static readonly PageFetchState AccessDenied = new("ACCESS_DENIED");

    public static readonly PageFetchState ServerError = new("SERVER_ERROR");

    public static readonly PageFetchState RedirectError = new("REDIRECT_ERROR");

    public static readonly PageFetchState AccessForbidden = new("ACCESS_FORBIDDEN");

    public static readonly PageFetchState Blocked4Xx = new("BLOCKED_4XX");

    public static readonly PageFetchState InternalCrawlError = new("INTERNAL_CRAWL_ERROR");

    public static readonly PageFetchState InvalidUrl = new("INVALID_URL");

    public TResult Match<TResult>(Func<TResult> onPageFetchStateUnspecified,
        Func<TResult> onSuccessful,
        Func<TResult> onSoft404,
        Func<TResult> onBlockedRobotsTxt,
        Func<TResult> onNotFound,
        Func<TResult> onAccessDenied,
        Func<TResult> onServerError,
        Func<TResult> onRedirectError,
        Func<TResult> onAccessForbidden,
        Func<TResult> onBlocked4Xx,
        Func<TResult> onInternalCrawlError,
        Func<TResult> onInvalidUrl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PageFetchStateUnspecified => onPageFetchStateUnspecified(),
            _ when this == Successful => onSuccessful(),
            _ when this == Soft404 => onSoft404(),
            _ when this == BlockedRobotsTxt => onBlockedRobotsTxt(),
            _ when this == NotFound => onNotFound(),
            _ when this == AccessDenied => onAccessDenied(),
            _ when this == ServerError => onServerError(),
            _ when this == RedirectError => onRedirectError(),
            _ when this == AccessForbidden => onAccessForbidden(),
            _ when this == Blocked4Xx => onBlocked4Xx(),
            _ when this == InternalCrawlError => onInternalCrawlError(),
            _ when this == InvalidUrl => onInvalidUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onPageFetchStateUnspecified,
        Action onSuccessful,
        Action onSoft404,
        Action onBlockedRobotsTxt,
        Action onNotFound,
        Action onAccessDenied,
        Action onServerError,
        Action onRedirectError,
        Action onAccessForbidden,
        Action onBlocked4Xx,
        Action onInternalCrawlError,
        Action onInvalidUrl,
        Action<string> otherwise)
    {
        if (this == PageFetchStateUnspecified) onPageFetchStateUnspecified();
        else if (this == Successful) onSuccessful();
        else if (this == Soft404) onSoft404();
        else if (this == BlockedRobotsTxt) onBlockedRobotsTxt();
        else if (this == NotFound) onNotFound();
        else if (this == AccessDenied) onAccessDenied();
        else if (this == ServerError) onServerError();
        else if (this == RedirectError) onRedirectError();
        else if (this == AccessForbidden) onAccessForbidden();
        else if (this == Blocked4Xx) onBlocked4Xx();
        else if (this == InternalCrawlError) onInternalCrawlError();
        else if (this == InvalidUrl) onInvalidUrl();
        else otherwise(Value);
    }
}
