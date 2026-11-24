using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using WhoisFreaks.Core.ErrorResponse;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Models;

namespace WhoisFreaks.Errors;

public sealed class DbNewlyGtldError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private DbNewlyGtldError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static DbNewlyGtldError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static DbNewlyGtldError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DbNewlyGtldError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DbNewlyGtldError)} holds no value.");
    }

    private static Task<DbNewlyGtldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DbNewlyGtldError> Response { get; } = new(Create);
}
