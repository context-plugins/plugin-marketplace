using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Justtrack.Core.ErrorResponse;
using Justtrack.Core.Models;
using Justtrack.Models;

namespace Justtrack.Errors;

public sealed class PostManagementV1BidsUploadError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private readonly Optional<UploadBidsInvalidBidResponse> _uploadBidsInvalidBidResponseValue;

    private PostManagementV1BidsUploadError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<UploadBidsInvalidBidResponse> uploadBidsInvalidBidResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
        _uploadBidsInvalidBidResponseValue = uploadBidsInvalidBidResponseValue;
    }

    private static PostManagementV1BidsUploadError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default, default);

    private static PostManagementV1BidsUploadError AsUploadBidsInvalidBidResponse(UploadBidsInvalidBidResponse value) =>
        new(default, Optional<UploadBidsInvalidBidResponse>.Some(value), default);

    private static PostManagementV1BidsUploadError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public bool TryGetUploadBidsInvalidBidResponse([NotNullWhen(true)] out UploadBidsInvalidBidResponse? value) =>
        _uploadBidsInvalidBidResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<UploadBidsInvalidBidResponse, TResult> onUploadBidsInvalidBidResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetUploadBidsInvalidBidResponse(
                out var uploadBidsInvalidBidResponseValue) => onUploadBidsInvalidBidResponse(
                uploadBidsInvalidBidResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostManagementV1BidsUploadError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel,
        Action<UploadBidsInvalidBidResponse> onUploadBidsInvalidBidResponse,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetUploadBidsInvalidBidResponse(
            out var uploadBidsInvalidBidResponseValue)) onUploadBidsInvalidBidResponse(
            uploadBidsInvalidBidResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostManagementV1BidsUploadError)} holds no value.");
    }

    private static Task<PostManagementV1BidsUploadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UploadBidsInvalidBidResponse>().As(AsUploadBidsInvalidBidResponse),
            500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostManagementV1BidsUploadError> Response { get; } = new(Create);
}
