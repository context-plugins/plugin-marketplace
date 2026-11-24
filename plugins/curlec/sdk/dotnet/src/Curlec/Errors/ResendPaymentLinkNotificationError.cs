using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Curlec.Core.ErrorResponse;
using Curlec.Core.Models;
using Curlec.Models;

namespace Curlec.Errors;

public sealed class ResendPaymentLinkNotificationError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ResendPaymentLinkNotificationError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ResendPaymentLinkNotificationError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ResendPaymentLinkNotificationError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ResendPaymentLinkNotificationError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ResendPaymentLinkNotificationError)} holds no value.");
    }

    private static Task<ResendPaymentLinkNotificationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ResendPaymentLinkNotificationError> Response { get; } = new(Create);
}
