using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CodeQr.Core.ErrorResponse;
using CodeQr.Core.Models;
using CodeQr.Models;

namespace CodeQr.Errors;

public sealed class GetQrCodesCountError : ApiError
{
    private readonly Optional<M4001> _m4001Value;

    private GetQrCodesCountError(Optional<M4001> m4001Value, Optional<RawError> fallback) : base(fallback)
    {
        _m4001Value = m4001Value;
    }

    private static GetQrCodesCountError AsM4001(M4001 value) => new(Optional<M4001>.Some(value), default);

    private static GetQrCodesCountError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetM4001([NotNullWhen(true)] out M4001? value) => _m4001Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<M4001, TResult> onM4001, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetM4001(out var m4001Value) => onM4001(m4001Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetQrCodesCountError)} holds no value.")
        };

    public void Match(Action<M4001> onM4001, Action<RawError> otherwise)
    {
        if (TryGetM4001(out var m4001Value)) onM4001(m4001Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetQrCodesCountError)} holds no value.");
    }

    private static Task<GetQrCodesCountError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 409 or 410 or 422 or 429 or 500 => response.Json<M4001>().As(AsM4001),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetQrCodesCountError> Response { get; } = new(Create);
}
