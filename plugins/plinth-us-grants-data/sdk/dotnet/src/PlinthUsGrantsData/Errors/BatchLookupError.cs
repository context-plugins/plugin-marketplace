using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core.ErrorResponse;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Errors;

public sealed class BatchLookupError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private BatchLookupError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
        _httpValidationErrorValue = httpValidationErrorValue;
    }

    private static BatchLookupError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default, default);

    private static BatchLookupError AsHttpValidationError(HttpValidationError value) =>
        new(default, Optional<HttpValidationError>.Some(value), default);

    private static BatchLookupError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(BatchLookupError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel,
        Action<HttpValidationError> onHttpValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(BatchLookupError)} holds no value.");
    }

    private static Task<BatchLookupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 402 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<BatchLookupError> Response { get; } = new(Create);
}
