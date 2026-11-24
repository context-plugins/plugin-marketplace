using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class CancelSignRequestError : ApiError
{
    private readonly Optional<Error1> _error1Value;

    private readonly Optional<NotFound1> _notFound1Value;

    private readonly Optional<Unauthenticated1> _unauthenticated1Value;

    private CancelSignRequestError(Optional<Error1> error1Value,
        Optional<NotFound1> notFound1Value,
        Optional<Unauthenticated1> unauthenticated1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _error1Value = error1Value;
        _notFound1Value = notFound1Value;
        _unauthenticated1Value = unauthenticated1Value;
    }

    private static CancelSignRequestError AsError1(Error1 value) =>
        new(Optional<Error1>.Some(value), default, default, default);

    private static CancelSignRequestError AsNotFound1(NotFound1 value) =>
        new(default, Optional<NotFound1>.Some(value), default, default);

    private static CancelSignRequestError AsUnauthenticated1(Unauthenticated1 value) =>
        new(default, default, Optional<Unauthenticated1>.Some(value), default);

    private static CancelSignRequestError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError1([NotNullWhen(true)] out Error1? value) => _error1Value.TryGetValue(out value);

    public bool TryGetNotFound1([NotNullWhen(true)] out NotFound1? value) => _notFound1Value.TryGetValue(out value);

    public bool TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value) =>
        _unauthenticated1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error1, TResult> onError1,
        Func<NotFound1, TResult> onNotFound1,
        Func<Unauthenticated1, TResult> onUnauthenticated1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError1(out var error1Value) => onError1(error1Value),
            _ when TryGetNotFound1(out var notFound1Value) => onNotFound1(notFound1Value),
            _ when TryGetUnauthenticated1(out var unauthenticated1Value) => onUnauthenticated1(unauthenticated1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CancelSignRequestError)} holds no value.")
        };

    public void Match(Action<Error1> onError1,
        Action<NotFound1> onNotFound1,
        Action<Unauthenticated1> onUnauthenticated1,
        Action<RawError> otherwise)
    {
        if (TryGetError1(out var error1Value)) onError1(error1Value);
        else if (TryGetNotFound1(out var notFound1Value)) onNotFound1(notFound1Value);
        else if (TryGetUnauthenticated1(out var unauthenticated1Value)) onUnauthenticated1(unauthenticated1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CancelSignRequestError)} holds no value.");
    }

    private static Task<CancelSignRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthenticated1>().As(AsUnauthenticated1),
            404 => response.Json<NotFound1>().As(AsNotFound1),
            422 => response.Json<Error1>().As(AsError1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CancelSignRequestError> Response { get; } = new(Create);
}
