using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class CallsStatisticsError : ApiError
{
    private readonly Optional<ApiV1CallsStatistics403Error1> _apiV1CallsStatistics403Error1Value;

    private CallsStatisticsError(Optional<ApiV1CallsStatistics403Error1> apiV1CallsStatistics403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1CallsStatistics403Error1Value = apiV1CallsStatistics403Error1Value;
    }

    private static CallsStatisticsError AsApiV1CallsStatistics403Error1(ApiV1CallsStatistics403Error1 value) =>
        new(Optional<ApiV1CallsStatistics403Error1>.Some(value), default);

    private static CallsStatisticsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1CallsStatistics403Error1([NotNullWhen(true)] out ApiV1CallsStatistics403Error1? value) =>
        _apiV1CallsStatistics403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1CallsStatistics403Error1, TResult> onApiV1CallsStatistics403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CallsStatistics403Error1(
                out var apiV1CallsStatistics403Error1Value) => onApiV1CallsStatistics403Error1(
                apiV1CallsStatistics403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CallsStatisticsError)} holds no value.")
        };

    public void Match(Action<ApiV1CallsStatistics403Error1> onApiV1CallsStatistics403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1CallsStatistics403Error1(
            out var apiV1CallsStatistics403Error1Value)) onApiV1CallsStatistics403Error1(
            apiV1CallsStatistics403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CallsStatisticsError)} holds no value.");
    }

    private static Task<CallsStatisticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1CallsStatistics403Error1>().As(AsApiV1CallsStatistics403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CallsStatisticsError> Response { get; } = new(Create);
}
