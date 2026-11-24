using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class GetLlmConfigError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetLlmConfigError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetLlmConfigError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static GetLlmConfigError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetLlmConfigError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetLlmConfigError)} holds no value.");
    }

    private static Task<GetLlmConfigError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetLlmConfigError> Response { get; } = new(Create);
}
