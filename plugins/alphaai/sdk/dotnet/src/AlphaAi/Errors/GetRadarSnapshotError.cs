using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AlphaAi.Core.ErrorResponse;
using AlphaAi.Core.Models;

namespace AlphaAi.Errors;

public sealed class GetRadarSnapshotError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private GetRadarSnapshotError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static GetRadarSnapshotError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static GetRadarSnapshotError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetRadarSnapshotError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetRadarSnapshotError)} holds no value.");
    }

    private static Task<GetRadarSnapshotError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 409 or 429 or 503 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetRadarSnapshotError> Response { get; } = new(Create);
}
