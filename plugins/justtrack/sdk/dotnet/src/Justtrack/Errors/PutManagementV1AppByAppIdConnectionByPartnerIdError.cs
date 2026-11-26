using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Justtrack.Core.ErrorResponse;
using Justtrack.Core.Models;
using Justtrack.Models;

namespace Justtrack.Errors;

public sealed class PutManagementV1AppByAppIdConnectionByPartnerIdError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private readonly Optional<RawError> _noContentValue;

    private PutManagementV1AppByAppIdConnectionByPartnerIdError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
        _noContentValue = noContentValue;
    }

    private static PutManagementV1AppByAppIdConnectionByPartnerIdError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default, default);

    private static PutManagementV1AppByAppIdConnectionByPartnerIdError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static PutManagementV1AppByAppIdConnectionByPartnerIdError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PutManagementV1AppByAppIdConnectionByPartnerIdError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(PutManagementV1AppByAppIdConnectionByPartnerIdError)} holds no value.");
    }

    private static Task<PutManagementV1AppByAppIdConnectionByPartnerIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            401 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutManagementV1AppByAppIdConnectionByPartnerIdError> Response { get; } = new(
        Create);
}
