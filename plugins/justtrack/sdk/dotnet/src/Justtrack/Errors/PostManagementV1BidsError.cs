using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Justtrack.Core.ErrorResponse;
using Justtrack.Core.Models;
using Justtrack.Models;

namespace Justtrack.Errors;

public sealed class PostManagementV1BidsError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private PostManagementV1BidsError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static PostManagementV1BidsError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static PostManagementV1BidsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostManagementV1BidsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostManagementV1BidsError)} holds no value.");
    }

    private static Task<PostManagementV1BidsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostManagementV1BidsError> Response { get; } = new(Create);
}
