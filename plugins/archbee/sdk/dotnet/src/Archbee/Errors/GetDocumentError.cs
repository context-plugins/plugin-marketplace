using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class GetDocumentError : ApiError
{
    private readonly Optional<Doc400Error1> _doc400Error1Value;

    private GetDocumentError(Optional<Doc400Error1> doc400Error1Value, Optional<RawError> fallback) : base(fallback)
    {
        _doc400Error1Value = doc400Error1Value;
    }

    private static GetDocumentError AsDoc400Error1(Doc400Error1 value) =>
        new(Optional<Doc400Error1>.Some(value), default);

    private static GetDocumentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetDoc400Error1([NotNullWhen(true)] out Doc400Error1? value) =>
        _doc400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Doc400Error1, TResult> onDoc400Error1, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDoc400Error1(out var doc400Error1Value) => onDoc400Error1(doc400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetDocumentError)} holds no value.")
        };

    public void Match(Action<Doc400Error1> onDoc400Error1, Action<RawError> otherwise)
    {
        if (TryGetDoc400Error1(out var doc400Error1Value)) onDoc400Error1(doc400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetDocumentError)} holds no value.");
    }

    private static Task<GetDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Doc400Error1>().As(AsDoc400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetDocumentError> Response { get; } = new(Create);
}
