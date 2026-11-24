using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core.ErrorResponse;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Errors;

public sealed class GetCustomerError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private GetCustomerError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static GetCustomerError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static GetCustomerError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCustomerError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCustomerError)} holds no value.");
    }

    private static Task<GetCustomerError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCustomerError> Response { get; } = new(Create);
}
