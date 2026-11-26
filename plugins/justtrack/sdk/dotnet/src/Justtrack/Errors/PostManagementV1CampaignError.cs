using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Justtrack.Core.ErrorResponse;
using Justtrack.Core.Models;
using Justtrack.Models;

namespace Justtrack.Errors;

public sealed class PostManagementV1CampaignError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private PostManagementV1CampaignError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static PostManagementV1CampaignError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static PostManagementV1CampaignError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostManagementV1CampaignError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostManagementV1CampaignError)} holds no value.");
    }

    private static Task<PostManagementV1CampaignError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostManagementV1CampaignError> Response { get; } = new(Create);
}
