using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AgentReady.Core.ErrorResponse;
using AgentReady.Core.Models;
using AgentReady.Models;

namespace AgentReady.Errors;

public sealed class ScanMcpError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private ScanMcpError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static ScanMcpError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static ScanMcpError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ScanMcpError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ScanMcpError)} holds no value.");
    }

    private static Task<ScanMcpError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 429 or 502 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ScanMcpError> Response { get; } = new(Create);
}
