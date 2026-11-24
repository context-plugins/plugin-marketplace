using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class EnrichError : ApiError
{
    private readonly Optional<Enrich400Error1> _enrich400Error1Value;

    private readonly Optional<Enrich403Error1> _enrich403Error1Value;

    private readonly Optional<Enrich500Error1> _enrich500Error1Value;

    private EnrichError(Optional<Enrich400Error1> enrich400Error1Value,
        Optional<Enrich403Error1> enrich403Error1Value,
        Optional<Enrich500Error1> enrich500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _enrich400Error1Value = enrich400Error1Value;
        _enrich403Error1Value = enrich403Error1Value;
        _enrich500Error1Value = enrich500Error1Value;
    }

    private static EnrichError AsEnrich400Error1(Enrich400Error1 value) =>
        new(Optional<Enrich400Error1>.Some(value), default, default, default);

    private static EnrichError AsEnrich403Error1(Enrich403Error1 value) =>
        new(default, Optional<Enrich403Error1>.Some(value), default, default);

    private static EnrichError AsEnrich500Error1(Enrich500Error1 value) =>
        new(default, default, Optional<Enrich500Error1>.Some(value), default);

    private static EnrichError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetEnrich400Error1([NotNullWhen(true)] out Enrich400Error1? value) =>
        _enrich400Error1Value.TryGetValue(out value);

    public bool TryGetEnrich403Error1([NotNullWhen(true)] out Enrich403Error1? value) =>
        _enrich403Error1Value.TryGetValue(out value);

    public bool TryGetEnrich500Error1([NotNullWhen(true)] out Enrich500Error1? value) =>
        _enrich500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Enrich400Error1, TResult> onEnrich400Error1,
        Func<Enrich403Error1, TResult> onEnrich403Error1,
        Func<Enrich500Error1, TResult> onEnrich500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEnrich400Error1(out var enrich400Error1Value) => onEnrich400Error1(enrich400Error1Value),
            _ when TryGetEnrich403Error1(out var enrich403Error1Value) => onEnrich403Error1(enrich403Error1Value),
            _ when TryGetEnrich500Error1(out var enrich500Error1Value) => onEnrich500Error1(enrich500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(EnrichError)} holds no value.")
        };

    public void Match(Action<Enrich400Error1> onEnrich400Error1,
        Action<Enrich403Error1> onEnrich403Error1,
        Action<Enrich500Error1> onEnrich500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetEnrich400Error1(out var enrich400Error1Value)) onEnrich400Error1(enrich400Error1Value);
        else if (TryGetEnrich403Error1(out var enrich403Error1Value)) onEnrich403Error1(enrich403Error1Value);
        else if (TryGetEnrich500Error1(out var enrich500Error1Value)) onEnrich500Error1(enrich500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(EnrichError)} holds no value.");
    }

    private static Task<EnrichError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Enrich400Error1>().As(AsEnrich400Error1),
            403 => response.Json<Enrich403Error1>().As(AsEnrich403Error1),
            500 => response.Json<Enrich500Error1>().As(AsEnrich500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<EnrichError> Response { get; } = new(Create);
}
