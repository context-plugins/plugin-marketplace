using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using EinsteinBots.Core.ErrorResponse;
using EinsteinBots.Core.Models;
using EinsteinBots.Models;

namespace EinsteinBots.Errors;

public sealed class ContinueSessionError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ContinueSessionError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ContinueSessionError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ContinueSessionError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ContinueSessionError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ContinueSessionError)} holds no value.");
    }

    private static Task<ContinueSessionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 422 or 423 or 429 or 503 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ContinueSessionError> Response { get; } = new(Create);
}
