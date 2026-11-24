using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CallNode.Core.ErrorResponse;
using CallNode.Core.Models;
using CallNode.Models;

namespace CallNode.Errors;

public sealed class SearchAvailableNumbersError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private SearchAvailableNumbersError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static SearchAvailableNumbersError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static SearchAvailableNumbersError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchAvailableNumbersError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchAvailableNumbersError)} holds no value.");
    }

    private static Task<SearchAvailableNumbersError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 502 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchAvailableNumbersError> Response { get; } = new(Create);
}
