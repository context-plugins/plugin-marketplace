using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;
using DidLogic.Models.AnyOf;

namespace DidLogic.Errors;

public sealed class AsrReportShowError : ApiError
{
    private readonly Optional<ApiV1AsrReportResponse1> _apiV1AsrReportResponse1Value;

    private readonly Optional<Error> _errorValue;

    private AsrReportShowError(Optional<ApiV1AsrReportResponse1> apiV1AsrReportResponse1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AsrReportResponse1Value = apiV1AsrReportResponse1Value;
        _errorValue = errorValue;
    }

    private static AsrReportShowError AsApiV1AsrReportResponse1(ApiV1AsrReportResponse1 value) =>
        new(Optional<ApiV1AsrReportResponse1>.Some(value), default, default);

    private static AsrReportShowError AsError(Error value) => new(default, Optional<Error>.Some(value), default);

    private static AsrReportShowError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1AsrReportResponse1([NotNullWhen(true)] out ApiV1AsrReportResponse1? value) =>
        _apiV1AsrReportResponse1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AsrReportResponse1, TResult> onApiV1AsrReportResponse1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AsrReportResponse1(out var apiV1AsrReportResponse1Value) => onApiV1AsrReportResponse1(
                apiV1AsrReportResponse1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AsrReportShowError)} holds no value.")
        };

    public void Match(Action<ApiV1AsrReportResponse1> onApiV1AsrReportResponse1,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AsrReportResponse1(out var apiV1AsrReportResponse1Value)) onApiV1AsrReportResponse1(
            apiV1AsrReportResponse1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AsrReportShowError)} holds no value.");
    }

    private static Task<AsrReportShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error>().As(AsError),
            403 => response.Json<ApiV1AsrReportResponse1>().As(AsApiV1AsrReportResponse1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AsrReportShowError> Response { get; } = new(Create);
}
