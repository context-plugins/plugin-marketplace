using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Paid.Core.ErrorResponse;
using Paid.Core.Models;
using Paid.Models;

namespace Paid.Errors;

public sealed class GetCustomerStateByExternalIdError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private GetCustomerStateByExternalIdError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static GetCustomerStateByExternalIdError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static GetCustomerStateByExternalIdError AsFallback(RawError value) =>
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
            _ => throw new InvalidOperationException($"{nameof(GetCustomerStateByExternalIdError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCustomerStateByExternalIdError)} holds no value.");
    }

    private static Task<GetCustomerStateByExternalIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 or 404 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCustomerStateByExternalIdError> Response { get; } = new(Create);
}
