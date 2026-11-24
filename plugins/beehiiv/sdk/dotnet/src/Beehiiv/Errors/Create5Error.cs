using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Beehiiv.Core.ErrorResponse;
using Beehiiv.Core.Models;
using Beehiiv.Models;

namespace Beehiiv.Errors;

public sealed class Create5Error : ApiError
{
    private readonly Optional<Error> _errorValue;

    private Create5Error(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static Create5Error AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static Create5Error AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(Create5Error)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(Create5Error)} holds no value.");
    }

    private static Task<Create5Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 409 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<Create5Error> Response { get; } = new(Create);
}
