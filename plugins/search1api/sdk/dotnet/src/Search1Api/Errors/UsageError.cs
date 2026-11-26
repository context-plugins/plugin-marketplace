using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Search1Api.Core.ErrorResponse;
using Search1Api.Core.Models;
using Search1Api.Models;

namespace Search1Api.Errors;

public sealed class UsageError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private UsageError(Optional<ApiErrorModel> apiErrorModelValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static UsageError AsApiErrorModel(ApiErrorModel value) => new(Optional<ApiErrorModel>.Some(value), default);

    private static UsageError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UsageError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UsageError)} holds no value.");
    }

    private static Task<UsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 429 or 500 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UsageError> Response { get; } = new(Create);
}
