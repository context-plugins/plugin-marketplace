using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class ListDocumentEpicsError : ApiError
{
    private readonly Optional<DisabledFeatureError> _disabledFeatureErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private ListDocumentEpicsError(Optional<DisabledFeatureError> disabledFeatureErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _disabledFeatureErrorValue = disabledFeatureErrorValue;
        _noContentValue = noContentValue;
    }

    private static ListDocumentEpicsError AsDisabledFeatureError(DisabledFeatureError value) =>
        new(Optional<DisabledFeatureError>.Some(value), default, default);

    private static ListDocumentEpicsError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static ListDocumentEpicsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value) =>
        _disabledFeatureErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DisabledFeatureError, TResult> onDisabledFeatureError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDisabledFeatureError(out var disabledFeatureErrorValue) => onDisabledFeatureError(
                disabledFeatureErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListDocumentEpicsError)} holds no value.")
        };

    public void Match(Action<DisabledFeatureError> onDisabledFeatureError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetDisabledFeatureError(out var disabledFeatureErrorValue)) onDisabledFeatureError(
            disabledFeatureErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListDocumentEpicsError)} holds no value.");
    }

    private static Task<ListDocumentEpicsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 422 => response.RawBody().As(AsNoContent),
            403 => response.Json<DisabledFeatureError>().As(AsDisabledFeatureError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListDocumentEpicsError> Response { get; } = new(Create);
}
