using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ForceDream.Core.ErrorResponse;
using ForceDream.Core.Models;
using ForceDream.Models;

namespace ForceDream.Errors;

public sealed class InvokeAgentError : ApiError
{
    private readonly Optional<Unauthorized1> _unauthorized1Value;

    private InvokeAgentError(Optional<Unauthorized1> unauthorized1Value, Optional<RawError> fallback) : base(fallback)
    {
        _unauthorized1Value = unauthorized1Value;
    }

    private static InvokeAgentError AsUnauthorized1(Unauthorized1 value) =>
        new(Optional<Unauthorized1>.Some(value), default);

    private static InvokeAgentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetUnauthorized1([NotNullWhen(true)] out Unauthorized1? value) =>
        _unauthorized1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Unauthorized1, TResult> onUnauthorized1, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnauthorized1(out var unauthorized1Value) => onUnauthorized1(unauthorized1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(InvokeAgentError)} holds no value.")
        };

    public void Match(Action<Unauthorized1> onUnauthorized1, Action<RawError> otherwise)
    {
        if (TryGetUnauthorized1(out var unauthorized1Value)) onUnauthorized1(unauthorized1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(InvokeAgentError)} holds no value.");
    }

    private static Task<InvokeAgentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthorized1>().As(AsUnauthorized1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<InvokeAgentError> Response { get; } = new(Create);
}
