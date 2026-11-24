using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;

namespace Shortcut.Errors;

public sealed class UpdateCategoryError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private UpdateCategoryError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static UpdateCategoryError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static UpdateCategoryError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateCategoryError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateCategoryError)} holds no value.");
    }

    private static Task<UpdateCategoryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 422 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateCategoryError> Response { get; } = new(Create);
}
