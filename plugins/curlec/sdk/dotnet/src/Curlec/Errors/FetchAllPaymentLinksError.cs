using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Curlec.Core.ErrorResponse;
using Curlec.Core.Models;
using Curlec.Models;

namespace Curlec.Errors;

public sealed class FetchAllPaymentLinksError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private FetchAllPaymentLinksError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static FetchAllPaymentLinksError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static FetchAllPaymentLinksError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(FetchAllPaymentLinksError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(FetchAllPaymentLinksError)} holds no value.");
    }

    private static Task<FetchAllPaymentLinksError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<FetchAllPaymentLinksError> Response { get; } = new(Create);
}
