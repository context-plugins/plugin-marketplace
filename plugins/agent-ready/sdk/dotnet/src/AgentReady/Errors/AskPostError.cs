using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AgentReady.Core.ErrorResponse;
using AgentReady.Core.Models;
using AgentReady.Models;
using AgentReady.Models.AnyOf;

namespace AgentReady.Errors;

public sealed class AskPostError : ApiError
{
    private readonly Optional<AskResponse1> _askResponse1Value;

    private readonly Optional<Error> _errorValue;

    private AskPostError(Optional<AskResponse1> askResponse1Value,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _askResponse1Value = askResponse1Value;
        _errorValue = errorValue;
    }

    private static AskPostError AsAskResponse1(AskResponse1 value) =>
        new(Optional<AskResponse1>.Some(value), default, default);

    private static AskPostError AsError(Error value) => new(default, Optional<Error>.Some(value), default);

    private static AskPostError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetAskResponse1([NotNullWhen(true)] out AskResponse1? value) =>
        _askResponse1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<AskResponse1, TResult> onAskResponse1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAskResponse1(out var askResponse1Value) => onAskResponse1(askResponse1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AskPostError)} holds no value.")
        };

    public void Match(Action<AskResponse1> onAskResponse1, Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetAskResponse1(out var askResponse1Value)) onAskResponse1(askResponse1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AskPostError)} holds no value.");
    }

    private static Task<AskPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 429 or 500 or 503 => response.Json<Error>().As(AsError),
            404 => response.Json<AskResponse1>().As(AsAskResponse1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AskPostError> Response { get; } = new(Create);
}
