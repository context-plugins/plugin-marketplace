using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CallNode.Core.ErrorResponse;
using CallNode.Core.Models;
using CallNode.Models;

namespace CallNode.Errors;

public sealed class ListFaxesError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ListFaxesError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ListFaxesError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ListFaxesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListFaxesError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListFaxesError)} holds no value.");
    }

    private static Task<ListFaxesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListFaxesError> Response { get; } = new(Create);
}
