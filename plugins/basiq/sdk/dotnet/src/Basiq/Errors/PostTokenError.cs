using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class PostTokenError : ApiError
{
    private readonly Optional<Token400Error1> _token400Error1Value;

    private readonly Optional<Token404Error1> _token404Error1Value;

    private readonly Optional<Token500Error1> _token500Error1Value;

    private PostTokenError(Optional<Token400Error1> token400Error1Value,
        Optional<Token404Error1> token404Error1Value,
        Optional<Token500Error1> token500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _token400Error1Value = token400Error1Value;
        _token404Error1Value = token404Error1Value;
        _token500Error1Value = token500Error1Value;
    }

    private static PostTokenError AsToken400Error1(Token400Error1 value) =>
        new(Optional<Token400Error1>.Some(value), default, default, default);

    private static PostTokenError AsToken404Error1(Token404Error1 value) =>
        new(default, Optional<Token404Error1>.Some(value), default, default);

    private static PostTokenError AsToken500Error1(Token500Error1 value) =>
        new(default, default, Optional<Token500Error1>.Some(value), default);

    private static PostTokenError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetToken400Error1([NotNullWhen(true)] out Token400Error1? value) =>
        _token400Error1Value.TryGetValue(out value);

    public bool TryGetToken404Error1([NotNullWhen(true)] out Token404Error1? value) =>
        _token404Error1Value.TryGetValue(out value);

    public bool TryGetToken500Error1([NotNullWhen(true)] out Token500Error1? value) =>
        _token500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Token400Error1, TResult> onToken400Error1,
        Func<Token404Error1, TResult> onToken404Error1,
        Func<Token500Error1, TResult> onToken500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetToken400Error1(out var token400Error1Value) => onToken400Error1(token400Error1Value),
            _ when TryGetToken404Error1(out var token404Error1Value) => onToken404Error1(token404Error1Value),
            _ when TryGetToken500Error1(out var token500Error1Value) => onToken500Error1(token500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostTokenError)} holds no value.")
        };

    public void Match(Action<Token400Error1> onToken400Error1,
        Action<Token404Error1> onToken404Error1,
        Action<Token500Error1> onToken500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetToken400Error1(out var token400Error1Value)) onToken400Error1(token400Error1Value);
        else if (TryGetToken404Error1(out var token404Error1Value)) onToken404Error1(token404Error1Value);
        else if (TryGetToken500Error1(out var token500Error1Value)) onToken500Error1(token500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostTokenError)} holds no value.");
    }

    private static Task<PostTokenError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Token400Error1>().As(AsToken400Error1),
            404 => response.Json<Token404Error1>().As(AsToken404Error1),
            500 => response.Json<Token500Error1>().As(AsToken500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostTokenError> Response { get; } = new(Create);
}
