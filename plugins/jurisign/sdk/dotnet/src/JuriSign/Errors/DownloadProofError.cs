using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class DownloadProofError : ApiError
{
    private readonly Optional<NotFound1> _notFound1Value;

    private readonly Optional<Unauthenticated1> _unauthenticated1Value;

    private DownloadProofError(Optional<NotFound1> notFound1Value,
        Optional<Unauthenticated1> unauthenticated1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _notFound1Value = notFound1Value;
        _unauthenticated1Value = unauthenticated1Value;
    }

    private static DownloadProofError AsNotFound1(NotFound1 value) =>
        new(Optional<NotFound1>.Some(value), default, default);

    private static DownloadProofError AsUnauthenticated1(Unauthenticated1 value) =>
        new(default, Optional<Unauthenticated1>.Some(value), default);

    private static DownloadProofError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNotFound1([NotNullWhen(true)] out NotFound1? value) => _notFound1Value.TryGetValue(out value);

    public bool TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value) =>
        _unauthenticated1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<NotFound1, TResult> onNotFound1,
        Func<Unauthenticated1, TResult> onUnauthenticated1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNotFound1(out var notFound1Value) => onNotFound1(notFound1Value),
            _ when TryGetUnauthenticated1(out var unauthenticated1Value) => onUnauthenticated1(unauthenticated1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DownloadProofError)} holds no value.")
        };

    public void Match(Action<NotFound1> onNotFound1,
        Action<Unauthenticated1> onUnauthenticated1,
        Action<RawError> otherwise)
    {
        if (TryGetNotFound1(out var notFound1Value)) onNotFound1(notFound1Value);
        else if (TryGetUnauthenticated1(out var unauthenticated1Value)) onUnauthenticated1(unauthenticated1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DownloadProofError)} holds no value.");
    }

    private static Task<DownloadProofError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthenticated1>().As(AsUnauthenticated1),
            404 => response.Json<NotFound1>().As(AsNotFound1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DownloadProofError> Response { get; } = new(Create);
}
