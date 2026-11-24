using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class GetAccountCreditsError : ApiError
{
    private readonly Optional<Unauthenticated1> _unauthenticated1Value;

    private GetAccountCreditsError(Optional<Unauthenticated1> unauthenticated1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _unauthenticated1Value = unauthenticated1Value;
    }

    private static GetAccountCreditsError AsUnauthenticated1(Unauthenticated1 value) =>
        new(Optional<Unauthenticated1>.Some(value), default);

    private static GetAccountCreditsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value) =>
        _unauthenticated1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Unauthenticated1, TResult> onUnauthenticated1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnauthenticated1(out var unauthenticated1Value) => onUnauthenticated1(unauthenticated1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAccountCreditsError)} holds no value.")
        };

    public void Match(Action<Unauthenticated1> onUnauthenticated1, Action<RawError> otherwise)
    {
        if (TryGetUnauthenticated1(out var unauthenticated1Value)) onUnauthenticated1(unauthenticated1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAccountCreditsError)} holds no value.");
    }

    private static Task<GetAccountCreditsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthenticated1>().As(AsUnauthenticated1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAccountCreditsError> Response { get; } = new(Create);
}
