using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core.ErrorResponse;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Errors;

public sealed class PostApiV1SqlError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private PostApiV1SqlError(Optional<ApiErrorModel> apiErrorModelValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static PostApiV1SqlError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default);

    private static PostApiV1SqlError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1SqlError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1SqlError)} holds no value.");
    }

    private static Task<PostApiV1SqlError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 402 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1SqlError> Response { get; } = new(Create);
}
