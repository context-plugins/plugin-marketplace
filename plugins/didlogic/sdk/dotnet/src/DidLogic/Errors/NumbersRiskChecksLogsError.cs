using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersRiskChecksLogsError : ApiError
{
    private readonly Optional<ApiV2NumbersRiskChecksLogs401Error1> _apiV2NumbersRiskChecksLogs401Error1Value;

    private readonly Optional<ApiV2NumbersRiskChecksLogs403Error1> _apiV2NumbersRiskChecksLogs403Error1Value;

    private NumbersRiskChecksLogsError(Optional<ApiV2NumbersRiskChecksLogs401Error1> apiV2NumbersRiskChecksLogs401Error1Value,
        Optional<ApiV2NumbersRiskChecksLogs403Error1> apiV2NumbersRiskChecksLogs403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2NumbersRiskChecksLogs401Error1Value = apiV2NumbersRiskChecksLogs401Error1Value;
        _apiV2NumbersRiskChecksLogs403Error1Value = apiV2NumbersRiskChecksLogs403Error1Value;
    }

    private static NumbersRiskChecksLogsError AsApiV2NumbersRiskChecksLogs401Error1(ApiV2NumbersRiskChecksLogs401Error1 value) =>
        new(Optional<ApiV2NumbersRiskChecksLogs401Error1>.Some(value), default, default);

    private static NumbersRiskChecksLogsError AsApiV2NumbersRiskChecksLogs403Error1(ApiV2NumbersRiskChecksLogs403Error1 value) =>
        new(default, Optional<ApiV2NumbersRiskChecksLogs403Error1>.Some(value), default);

    private static NumbersRiskChecksLogsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2NumbersRiskChecksLogs401Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecksLogs401Error1? value) =>
        _apiV2NumbersRiskChecksLogs401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2NumbersRiskChecksLogs403Error1([NotNullWhen(true)] out ApiV2NumbersRiskChecksLogs403Error1? value) =>
        _apiV2NumbersRiskChecksLogs403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2NumbersRiskChecksLogs401Error1, TResult> onApiV2NumbersRiskChecksLogs401Error1,
        Func<ApiV2NumbersRiskChecksLogs403Error1, TResult> onApiV2NumbersRiskChecksLogs403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2NumbersRiskChecksLogs401Error1(
                out var apiV2NumbersRiskChecksLogs401Error1Value) => onApiV2NumbersRiskChecksLogs401Error1(
                apiV2NumbersRiskChecksLogs401Error1Value),
            _ when TryGetApiV2NumbersRiskChecksLogs403Error1(
                out var apiV2NumbersRiskChecksLogs403Error1Value) => onApiV2NumbersRiskChecksLogs403Error1(
                apiV2NumbersRiskChecksLogs403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersRiskChecksLogsError)} holds no value.")
        };

    public void Match(Action<ApiV2NumbersRiskChecksLogs401Error1> onApiV2NumbersRiskChecksLogs401Error1,
        Action<ApiV2NumbersRiskChecksLogs403Error1> onApiV2NumbersRiskChecksLogs403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2NumbersRiskChecksLogs401Error1(
            out var apiV2NumbersRiskChecksLogs401Error1Value)) onApiV2NumbersRiskChecksLogs401Error1(
            apiV2NumbersRiskChecksLogs401Error1Value);
        else if (TryGetApiV2NumbersRiskChecksLogs403Error1(
            out var apiV2NumbersRiskChecksLogs403Error1Value)) onApiV2NumbersRiskChecksLogs403Error1(
            apiV2NumbersRiskChecksLogs403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersRiskChecksLogsError)} holds no value.");
    }

    private static Task<NumbersRiskChecksLogsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2NumbersRiskChecksLogs401Error1>().As(AsApiV2NumbersRiskChecksLogs401Error1),
            403 => response.Json<ApiV2NumbersRiskChecksLogs403Error1>().As(AsApiV2NumbersRiskChecksLogs403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersRiskChecksLogsError> Response { get; } = new(Create);
}
