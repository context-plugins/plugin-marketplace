using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Cubic.Core.ErrorResponse;
using Cubic.Core.Models;
using Cubic.Models;

namespace Cubic.Errors;

public sealed class ListPullRequestAnalyticsError : ApiError
{
    private readonly Optional<AnalyticsError> _analyticsErrorValue;

    private ListPullRequestAnalyticsError(Optional<AnalyticsError> analyticsErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _analyticsErrorValue = analyticsErrorValue;
    }

    private static ListPullRequestAnalyticsError AsAnalyticsError(AnalyticsError value) =>
        new(Optional<AnalyticsError>.Some(value), default);

    private static ListPullRequestAnalyticsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetAnalyticsError([NotNullWhen(true)] out AnalyticsError? value) =>
        _analyticsErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AnalyticsError, TResult> onAnalyticsError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnalyticsError(out var analyticsErrorValue) => onAnalyticsError(analyticsErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListPullRequestAnalyticsError)} holds no value.")
        };

    public void Match(Action<AnalyticsError> onAnalyticsError, Action<RawError> otherwise)
    {
        if (TryGetAnalyticsError(out var analyticsErrorValue)) onAnalyticsError(analyticsErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListPullRequestAnalyticsError)} holds no value.");
    }

    private static Task<ListPullRequestAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 429 or 500 or 503 => response.Json<AnalyticsError>().As(AsAnalyticsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListPullRequestAnalyticsError> Response { get; } = new(Create);
}
