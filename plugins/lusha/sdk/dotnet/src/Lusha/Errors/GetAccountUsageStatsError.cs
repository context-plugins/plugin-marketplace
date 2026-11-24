using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Lusha.Core.ErrorResponse;
using Lusha.Core.Models;
using Lusha.Models;

namespace Lusha.Errors;

public sealed class GetAccountUsageStatsError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private GetAccountUsageStatsError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static GetAccountUsageStatsError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static GetAccountUsageStatsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAccountUsageStatsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAccountUsageStatsError)} holds no value.");
    }

    private static Task<GetAccountUsageStatsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 429 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAccountUsageStatsError> Response { get; } = new(Create);
}
