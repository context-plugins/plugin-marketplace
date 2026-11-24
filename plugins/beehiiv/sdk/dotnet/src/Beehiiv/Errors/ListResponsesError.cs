using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Beehiiv.Core.ErrorResponse;
using Beehiiv.Core.Models;
using Beehiiv.Models;

namespace Beehiiv.Errors;

public sealed class ListResponsesError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ListResponsesError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ListResponsesError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ListResponsesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListResponsesError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListResponsesError)} holds no value.");
    }

    private static Task<ListResponsesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 or 429 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListResponsesError> Response { get; } = new(Create);
}
