using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Unbounce.Core.ErrorResponse;
using Unbounce.Core.Models;
using Unbounce.Models;

namespace Unbounce.Errors;

public sealed class ListAccountsError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ListAccountsError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ListAccountsError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ListAccountsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListAccountsError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListAccountsError)} holds no value.");
    }

    private static Task<ListAccountsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListAccountsError> Response { get; } = new(Create);
}
