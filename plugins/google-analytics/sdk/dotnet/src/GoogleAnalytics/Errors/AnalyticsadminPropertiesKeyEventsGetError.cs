using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using GoogleAnalytics.Core.ErrorResponse;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models;

namespace GoogleAnalytics.Errors;

public sealed class AnalyticsadminPropertiesKeyEventsGetError : ApiError
{
    private readonly Optional<GoogleRpcError> _googleRpcErrorValue;

    private AnalyticsadminPropertiesKeyEventsGetError(Optional<GoogleRpcError> googleRpcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _googleRpcErrorValue = googleRpcErrorValue;
    }

    private static AnalyticsadminPropertiesKeyEventsGetError AsGoogleRpcError(GoogleRpcError value) =>
        new(Optional<GoogleRpcError>.Some(value), default);

    private static AnalyticsadminPropertiesKeyEventsGetError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value) =>
        _googleRpcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GoogleRpcError, TResult> onGoogleRpcError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGoogleRpcError(out var googleRpcErrorValue) => onGoogleRpcError(googleRpcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(AnalyticsadminPropertiesKeyEventsGetError)} holds no value.")
        };

    public void Match(Action<GoogleRpcError> onGoogleRpcError, Action<RawError> otherwise)
    {
        if (TryGetGoogleRpcError(out var googleRpcErrorValue)) onGoogleRpcError(googleRpcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(AnalyticsadminPropertiesKeyEventsGetError)} holds no value.");
    }

    private static Task<AnalyticsadminPropertiesKeyEventsGetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<GoogleRpcError>().As(AsGoogleRpcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AnalyticsadminPropertiesKeyEventsGetError> Response { get; } = new(Create);
}
