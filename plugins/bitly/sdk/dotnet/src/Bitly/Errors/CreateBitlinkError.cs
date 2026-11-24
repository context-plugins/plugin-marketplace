using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitly.Core.ErrorResponse;
using Bitly.Core.Models;
using Bitly.Models;

namespace Bitly.Errors;

public sealed class CreateBitlinkError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<SimplifiedError> _simplifiedErrorValue;

    private CreateBitlinkError(Optional<Error> errorValue,
        Optional<SimplifiedError> simplifiedErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _simplifiedErrorValue = simplifiedErrorValue;
    }

    private static CreateBitlinkError AsError(Error value) => new(Optional<Error>.Some(value), default, default);

    private static CreateBitlinkError AsSimplifiedError(SimplifiedError value) =>
        new(default, Optional<SimplifiedError>.Some(value), default);

    private static CreateBitlinkError AsFallback(RawError value) =>
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
            _ => throw new InvalidOperationException($"{nameof(CreateBitlinkError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<SimplifiedError> onSimplifiedError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetSimplifiedError(out var simplifiedErrorValue)) onSimplifiedError(simplifiedErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateBitlinkError)} holds no value.");
    }

    private static Task<CreateBitlinkError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 417 or 422 or 500 or 503 => response.Json<Error>().As(AsError),
            429 => response.Json<SimplifiedError>().As(AsSimplifiedError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateBitlinkError> Response { get; } = new(Create);
}
