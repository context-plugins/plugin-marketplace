using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class CallsShowError : ApiError
{
    private readonly Optional<ApiV1Calls401Error1> _apiV1Calls401Error1Value;

    private readonly Optional<ApiV1Calls403Error1> _apiV1Calls403Error1Value;

    private CallsShowError(Optional<ApiV1Calls401Error1> apiV1Calls401Error1Value,
        Optional<ApiV1Calls403Error1> apiV1Calls403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Calls401Error1Value = apiV1Calls401Error1Value;
        _apiV1Calls403Error1Value = apiV1Calls403Error1Value;
    }

    private static CallsShowError AsApiV1Calls401Error1(ApiV1Calls401Error1 value) =>
        new(Optional<ApiV1Calls401Error1>.Some(value), default, default);

    private static CallsShowError AsApiV1Calls403Error1(ApiV1Calls403Error1 value) =>
        new(default, Optional<ApiV1Calls403Error1>.Some(value), default);

    private static CallsShowError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Calls401Error1([NotNullWhen(true)] out ApiV1Calls401Error1? value) =>
        _apiV1Calls401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Calls403Error1([NotNullWhen(true)] out ApiV1Calls403Error1? value) =>
        _apiV1Calls403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Calls401Error1, TResult> onApiV1Calls401Error1,
        Func<ApiV1Calls403Error1, TResult> onApiV1Calls403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Calls401Error1(out var apiV1Calls401Error1Value) => onApiV1Calls401Error1(
                apiV1Calls401Error1Value),
            _ when TryGetApiV1Calls403Error1(out var apiV1Calls403Error1Value) => onApiV1Calls403Error1(
                apiV1Calls403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CallsShowError)} holds no value.")
        };

    public void Match(Action<ApiV1Calls401Error1> onApiV1Calls401Error1,
        Action<ApiV1Calls403Error1> onApiV1Calls403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Calls401Error1(out var apiV1Calls401Error1Value)) onApiV1Calls401Error1(
            apiV1Calls401Error1Value);
        else if (TryGetApiV1Calls403Error1(out var apiV1Calls403Error1Value)) onApiV1Calls403Error1(
            apiV1Calls403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CallsShowError)} holds no value.");
    }

    private static Task<CallsShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV1Calls401Error1>().As(AsApiV1Calls401Error1),
            403 => response.Json<ApiV1Calls403Error1>().As(AsApiV1Calls403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CallsShowError> Response { get; } = new(Create);
}
