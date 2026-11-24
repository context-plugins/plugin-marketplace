using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ApiVerve.Core.ErrorResponse;
using ApiVerve.Core.Models;

namespace ApiVerve.Errors;

public sealed class TextsummarizerError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private TextsummarizerError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static TextsummarizerError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static TextsummarizerError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TextsummarizerError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TextsummarizerError)} holds no value.");
    }

    private static Task<TextsummarizerError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 or 500 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TextsummarizerError> Response { get; } = new(Create);
}
