using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Surfe.Core.ErrorResponse;
using Surfe.Core.Models;
using Surfe.Models;

namespace Surfe.Errors;

public sealed class UpsertIcpError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private UpsertIcpError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static UpsertIcpError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static UpsertIcpError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpsertIcpError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpsertIcpError)} holds no value.");
    }

    private static Task<UpsertIcpError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpsertIcpError> Response { get; } = new(Create);
}
