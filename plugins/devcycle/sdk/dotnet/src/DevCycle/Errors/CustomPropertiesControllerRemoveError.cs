using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;

namespace DevCycle.Errors;

public sealed class CustomPropertiesControllerRemoveError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private CustomPropertiesControllerRemoveError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static CustomPropertiesControllerRemoveError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static CustomPropertiesControllerRemoveError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CustomPropertiesControllerRemoveError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CustomPropertiesControllerRemoveError)} holds no value.");
    }

    private static Task<CustomPropertiesControllerRemoveError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CustomPropertiesControllerRemoveError> Response { get; } = new(Create);
}
