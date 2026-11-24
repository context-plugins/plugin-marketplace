using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitly.Core.ErrorResponse;
using Bitly.Core.Models;
using Bitly.Models;

namespace Bitly.Errors;

public sealed class CreateQrCodePublicError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<SimplifiedError> _simplifiedErrorValue;

    private CreateQrCodePublicError(Optional<Error> errorValue,
        Optional<SimplifiedError> simplifiedErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _simplifiedErrorValue = simplifiedErrorValue;
    }

    private static CreateQrCodePublicError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static CreateQrCodePublicError AsSimplifiedError(SimplifiedError value) =>
        new(default, Optional<SimplifiedError>.Some(value), default);

    private static CreateQrCodePublicError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetSimplifiedError([NotNullWhen(true)] out SimplifiedError? value) =>
        _simplifiedErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<SimplifiedError, TResult> onSimplifiedError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetSimplifiedError(out var simplifiedErrorValue) => onSimplifiedError(simplifiedErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateQrCodePublicError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<SimplifiedError> onSimplifiedError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetSimplifiedError(out var simplifiedErrorValue)) onSimplifiedError(simplifiedErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateQrCodePublicError)} holds no value.");
    }

    private static Task<CreateQrCodePublicError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 402 or 403 or 404 or 410 or 500 => response.Json<Error>().As(AsError),
            429 => response.Json<SimplifiedError>().As(AsSimplifiedError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateQrCodePublicError> Response { get; } = new(Create);
}
