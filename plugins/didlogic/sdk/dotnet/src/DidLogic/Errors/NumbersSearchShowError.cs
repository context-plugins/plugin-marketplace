using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersSearchShowError : ApiError
{
    private readonly Optional<ApiV2NumbersSearch401Error1> _apiV2NumbersSearch401Error1Value;

    private readonly Optional<ApiV2NumbersSearch403Error1> _apiV2NumbersSearch403Error1Value;

    private NumbersSearchShowError(Optional<ApiV2NumbersSearch401Error1> apiV2NumbersSearch401Error1Value,
        Optional<ApiV2NumbersSearch403Error1> apiV2NumbersSearch403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersSearch401Error1Value = apiV2NumbersSearch401Error1Value;
        _apiV2NumbersSearch403Error1Value = apiV2NumbersSearch403Error1Value;
    }

    private static NumbersSearchShowError AsApiV2NumbersSearch401Error1(ApiV2NumbersSearch401Error1 value) =>
        new(Optional<ApiV2NumbersSearch401Error1>.Some(value), default, default);

    private static NumbersSearchShowError AsApiV2NumbersSearch403Error1(ApiV2NumbersSearch403Error1 value) =>
        new(default, Optional<ApiV2NumbersSearch403Error1>.Some(value), default);

    private static NumbersSearchShowError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersSearch401Error1([NotNullWhen(true)] out ApiV2NumbersSearch401Error1? value) =>
        _apiV2NumbersSearch401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersSearch403Error1([NotNullWhen(true)] out ApiV2NumbersSearch403Error1? value) =>
        _apiV2NumbersSearch403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersSearch401Error1, TResult> onApiV2NumbersSearch401Error1,
        Func<ApiV2NumbersSearch403Error1, TResult> onApiV2NumbersSearch403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersSearch401Error1(
                out var apiV2NumbersSearch401Error1Value) => onApiV2NumbersSearch401Error1(
                apiV2NumbersSearch401Error1Value),
            _ when TryGetApiV2NumbersSearch403Error1(
                out var apiV2NumbersSearch403Error1Value) => onApiV2NumbersSearch403Error1(
                apiV2NumbersSearch403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersSearchShowError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersSearch401Error1> onApiV2NumbersSearch401Error1,
        Action<ApiV2NumbersSearch403Error1> onApiV2NumbersSearch403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersSearch401Error1(out var apiV2NumbersSearch401Error1Value)) onApiV2NumbersSearch401Error1(
            apiV2NumbersSearch401Error1Value);
        else if (TryGetApiV2NumbersSearch403Error1(
            out var apiV2NumbersSearch403Error1Value)) onApiV2NumbersSearch403Error1(apiV2NumbersSearch403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersSearchShowError)} holds no value.");
    }

    private static Task<NumbersSearchShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersSearch401Error1>().As(AsApiV2NumbersSearch401Error1),
            403 => response.Json<ApiV2NumbersSearch403Error1>().As(AsApiV2NumbersSearch403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersSearchShowError> Response { get; } = new(Create);
}
