using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetMaxSearchResultsError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private GetMaxSearchResultsError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static GetMaxSearchResultsError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default);

    private static GetMaxSearchResultsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetMaxSearchResultsError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetMaxSearchResultsError)} holds no value.");
    }

    private static Task<GetMaxSearchResultsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetMaxSearchResultsError> Response { get; } = new(Create);
}
