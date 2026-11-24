using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class NumbersRiskChecksCreateError : ApiError
{
    private readonly Optional<ApiV2NumbersRiskChecks401Error1> _apiV2NumbersRiskChecks401Error1Value;

    private readonly Optional<ApiV2NumbersRiskChecks403Error1> _apiV2NumbersRiskChecks403Error1Value;

    private readonly Optional<ApiV2NumbersRiskChecksResponse21> _apiV2NumbersRiskChecksResponse21Value;

    private NumbersRiskChecksCreateError(Optional<ApiV2NumbersRiskChecks401Error1> apiV2NumbersRiskChecks401Error1Value,
        Optional<ApiV2NumbersRiskChecks403Error1> apiV2NumbersRiskChecks403Error1Value,
        Optional<ApiV2NumbersRiskChecksResponse21> apiV2NumbersRiskChecksResponse21Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersRiskChecks401Error1Value = apiV2NumbersRiskChecks401Error1Value;
        _apiV2NumbersRiskChecks403Error1Value = apiV2NumbersRiskChecks403Error1Value;
        _apiV2NumbersRiskChecksResponse21Value = apiV2NumbersRiskChecksResponse21Value;
    }

    private static NumbersRiskChecksCreateError AsApiV2NumbersRiskChecks401Error1(ApiV2NumbersRiskChecks401Error1 value) =>
        new(Optional<ApiV2NumbersRiskChecks401Error1>.Some(value), default, default, default);

    private static NumbersRiskChecksCreateError AsApiV2NumbersRiskChecks403Error1(ApiV2NumbersRiskChecks403Error1 value) =>
        new(default, Optional<ApiV2NumbersRiskChecks403Error1>.Some(value), default, default);

    private static NumbersRiskChecksCreateError AsApiV2NumbersRiskChecksResponse21(ApiV2NumbersRiskChecksResponse21 value) =>
        new(default, default, Optional<ApiV2NumbersRiskChecksResponse21>.Some(value), default);

    private static NumbersRiskChecksCreateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersRiskChecks401Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks401Error1? value) =>
        _apiV2NumbersRiskChecks401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersRiskChecks403Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecks403Error1? value) =>
        _apiV2NumbersRiskChecks403Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersRiskChecksResponse21([NotNullWhen(true)] out ApiV2NumbersRiskChecksResponse21? value) =>
        _apiV2NumbersRiskChecksResponse21Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersRiskChecks401Error1, TResult> onApiV2NumbersRiskChecks401Error1,
        Func<ApiV2NumbersRiskChecks403Error1, TResult> onApiV2NumbersRiskChecks403Error1,
        Func<ApiV2NumbersRiskChecksResponse21, TResult> onApiV2NumbersRiskChecksResponse21,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersRiskChecks401Error1(
                out var apiV2NumbersRiskChecks401Error1Value) => onApiV2NumbersRiskChecks401Error1(
                apiV2NumbersRiskChecks401Error1Value),
            _ when TryGetApiV2NumbersRiskChecks403Error1(
                out var apiV2NumbersRiskChecks403Error1Value) => onApiV2NumbersRiskChecks403Error1(
                apiV2NumbersRiskChecks403Error1Value),
            _ when TryGetApiV2NumbersRiskChecksResponse21(
                out var apiV2NumbersRiskChecksResponse21Value) => onApiV2NumbersRiskChecksResponse21(
                apiV2NumbersRiskChecksResponse21Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersRiskChecksCreateError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersRiskChecks401Error1> onApiV2NumbersRiskChecks401Error1,
        Action<ApiV2NumbersRiskChecks403Error1> onApiV2NumbersRiskChecks403Error1,
        Action<ApiV2NumbersRiskChecksResponse21> onApiV2NumbersRiskChecksResponse21,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersRiskChecks401Error1(
            out var apiV2NumbersRiskChecks401Error1Value)) onApiV2NumbersRiskChecks401Error1(
            apiV2NumbersRiskChecks401Error1Value);
        else if (TryGetApiV2NumbersRiskChecks403Error1(
            out var apiV2NumbersRiskChecks403Error1Value)) onApiV2NumbersRiskChecks403Error1(
            apiV2NumbersRiskChecks403Error1Value);
        else if (TryGetApiV2NumbersRiskChecksResponse21(
            out var apiV2NumbersRiskChecksResponse21Value)) onApiV2NumbersRiskChecksResponse21(
            apiV2NumbersRiskChecksResponse21Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersRiskChecksCreateError)} holds no value.");
    }

    private static Task<NumbersRiskChecksCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersRiskChecks401Error1>().As(AsApiV2NumbersRiskChecks401Error1),
            403 => response.Json<ApiV2NumbersRiskChecks403Error1>().As(AsApiV2NumbersRiskChecks403Error1),
            422 => response.Json<ApiV2NumbersRiskChecksResponse21>().As(AsApiV2NumbersRiskChecksResponse21),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersRiskChecksCreateError> Response { get; } = new(Create);
}
