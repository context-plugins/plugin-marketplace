using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class SyncOpenApiDocumentError : ApiError
{
    private readonly Optional<SyncApiReference400Error1> _syncApiReference400Error1Value;

    private SyncOpenApiDocumentError(Optional<SyncApiReference400Error1> syncApiReference400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _syncApiReference400Error1Value = syncApiReference400Error1Value;
    }

    private static SyncOpenApiDocumentError AsSyncApiReference400Error1(SyncApiReference400Error1 value) =>
        new(Optional<SyncApiReference400Error1>.Some(value), default);

    private static SyncOpenApiDocumentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetSyncApiReference400Error1([NotNullWhen(true)] out SyncApiReference400Error1? value) =>
        _syncApiReference400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<SyncApiReference400Error1, TResult> onSyncApiReference400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSyncApiReference400Error1(
                out var syncApiReference400Error1Value) => onSyncApiReference400Error1(syncApiReference400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SyncOpenApiDocumentError)} holds no value.")
        };

    public void Match(Action<SyncApiReference400Error1> onSyncApiReference400Error1, Action<RawError> otherwise)
    {
        if (TryGetSyncApiReference400Error1(out var syncApiReference400Error1Value)) onSyncApiReference400Error1(
            syncApiReference400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SyncOpenApiDocumentError)} holds no value.");
    }

    private static Task<SyncOpenApiDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<SyncApiReference400Error1>().As(AsSyncApiReference400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SyncOpenApiDocumentError> Response { get; } = new(Create);
}
