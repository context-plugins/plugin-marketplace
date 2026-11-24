using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class GetAllExecutionLogsError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetAllExecutionLogsError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetAllExecutionLogsError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static GetAllExecutionLogsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAllExecutionLogsError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAllExecutionLogsError)} holds no value.");
    }

    private static Task<GetAllExecutionLogsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAllExecutionLogsError> Response { get; } = new(Create);
}
