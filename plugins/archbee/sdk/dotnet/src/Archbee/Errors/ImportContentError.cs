using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class ImportContentError : ApiError
{
    private readonly Optional<ImportContent400Error1> _importContent400Error1Value;

    private ImportContentError(Optional<ImportContent400Error1> importContent400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _importContent400Error1Value = importContent400Error1Value;
    }

    private static ImportContentError AsImportContent400Error1(ImportContent400Error1 value) =>
        new(Optional<ImportContent400Error1>.Some(value), default);

    private static ImportContentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetImportContent400Error1([NotNullWhen(true)] out ImportContent400Error1? value) =>
        _importContent400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ImportContent400Error1, TResult> onImportContent400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetImportContent400Error1(out var importContent400Error1Value) => onImportContent400Error1(
                importContent400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ImportContentError)} holds no value.")
        };

    public void Match(Action<ImportContent400Error1> onImportContent400Error1, Action<RawError> otherwise)
    {
        if (TryGetImportContent400Error1(out var importContent400Error1Value)) onImportContent400Error1(
            importContent400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ImportContentError)} holds no value.");
    }

    private static Task<ImportContentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ImportContent400Error1>().As(AsImportContent400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ImportContentError> Response { get; } = new(Create);
}
