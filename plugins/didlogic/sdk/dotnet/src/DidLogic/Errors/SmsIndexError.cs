using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class SmsIndexError : ApiError
{
    private readonly Optional<ApiV1Sms403Error1> _apiV1Sms403Error1Value;

    private SmsIndexError(Optional<ApiV1Sms403Error1> apiV1Sms403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Sms403Error1Value = apiV1Sms403Error1Value;
    }

    private static SmsIndexError AsApiV1Sms403Error1(ApiV1Sms403Error1 value) =>
        new(Optional<ApiV1Sms403Error1>.Some(value), default);

    private static SmsIndexError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Sms403Error1([NotNullWhen(true)] out ApiV1Sms403Error1? value) =>
        _apiV1Sms403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Sms403Error1, TResult> onApiV1Sms403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Sms403Error1(out var apiV1Sms403Error1Value) => onApiV1Sms403Error1(
                apiV1Sms403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SmsIndexError)} holds no value.")
        };

    public void Match(Action<ApiV1Sms403Error1> onApiV1Sms403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1Sms403Error1(out var apiV1Sms403Error1Value)) onApiV1Sms403Error1(apiV1Sms403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SmsIndexError)} holds no value.");
    }

    private static Task<SmsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1Sms403Error1>().As(AsApiV1Sms403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SmsIndexError> Response { get; } = new(Create);
}
