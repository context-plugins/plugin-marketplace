using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class InfoOpenApiDocumentError : ApiError
{
    private readonly Optional<InfoApiReference400Error1> _infoApiReference400Error1Value;

    private InfoOpenApiDocumentError(Optional<InfoApiReference400Error1> infoApiReference400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _infoApiReference400Error1Value = infoApiReference400Error1Value;
    }

    private static InfoOpenApiDocumentError AsInfoApiReference400Error1(InfoApiReference400Error1 value) =>
        new(Optional<InfoApiReference400Error1>.Some(value), default);

    private static InfoOpenApiDocumentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetInfoApiReference400Error1([NotNullWhen(true)] out InfoApiReference400Error1? value) =>
        _infoApiReference400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<InfoApiReference400Error1, TResult> onInfoApiReference400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInfoApiReference400Error1(
                out var infoApiReference400Error1Value) => onInfoApiReference400Error1(infoApiReference400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(InfoOpenApiDocumentError)} holds no value.")
        };

    public void Match(Action<InfoApiReference400Error1> onInfoApiReference400Error1, Action<RawError> otherwise)
    {
        if (TryGetInfoApiReference400Error1(out var infoApiReference400Error1Value)) onInfoApiReference400Error1(
            infoApiReference400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(InfoOpenApiDocumentError)} holds no value.");
    }

    private static Task<InfoOpenApiDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<InfoApiReference400Error1>().As(AsInfoApiReference400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<InfoOpenApiDocumentError> Response { get; } = new(Create);
}
