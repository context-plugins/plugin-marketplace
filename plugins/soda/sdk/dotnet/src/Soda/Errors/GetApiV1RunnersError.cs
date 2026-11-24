using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Soda.Core.ErrorResponse;
using Soda.Core.Models;
using Soda.Models;

namespace Soda.Errors;

public sealed class GetApiV1RunnersError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private GetApiV1RunnersError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static GetApiV1RunnersError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static GetApiV1RunnersError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetApiV1RunnersError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetApiV1RunnersError)} holds no value.");
    }

    private static Task<GetApiV1RunnersError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 429 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetApiV1RunnersError> Response { get; } = new(Create);
}
