using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;

namespace Deliverd.Errors;

public sealed class PatchApiV1AiSystemsByIdError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private PatchApiV1AiSystemsByIdError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static PatchApiV1AiSystemsByIdError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static PatchApiV1AiSystemsByIdError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PatchApiV1AiSystemsByIdError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PatchApiV1AiSystemsByIdError)} holds no value.");
    }

    private static Task<PatchApiV1AiSystemsByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            402 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PatchApiV1AiSystemsByIdError> Response { get; } = new(Create);
}
