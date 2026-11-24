using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitly.Core.ErrorResponse;
using Bitly.Core.Models;
using Bitly.Models;

namespace Bitly.Errors;

public sealed class GetGroupTopMetricsError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetGroupTopMetricsError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetGroupTopMetricsError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static GetGroupTopMetricsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetGroupTopMetricsError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetGroupTopMetricsError)} holds no value.");
    }

    private static Task<GetGroupTopMetricsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 500 or 503 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetGroupTopMetricsError> Response { get; } = new(Create);
}
