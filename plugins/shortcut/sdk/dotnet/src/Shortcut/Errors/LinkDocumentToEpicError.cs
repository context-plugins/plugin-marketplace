using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class LinkDocumentToEpicError : ApiError
{
    private readonly Optional<DisabledFeatureError> _disabledFeatureErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<UnprocessableError> _unprocessableErrorValue;

    private LinkDocumentToEpicError(Optional<DisabledFeatureError> disabledFeatureErrorValue,
        Optional<RawError> noContentValue,
        Optional<UnprocessableError> unprocessableErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _disabledFeatureErrorValue = disabledFeatureErrorValue;
        _noContentValue = noContentValue;
        _unprocessableErrorValue = unprocessableErrorValue;
    }

    private static LinkDocumentToEpicError AsDisabledFeatureError(DisabledFeatureError value) =>
        new(Optional<DisabledFeatureError>.Some(value), default, default, default);

    private static LinkDocumentToEpicError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default);

    private static LinkDocumentToEpicError AsUnprocessableError(UnprocessableError value) =>
        new(default, default, Optional<UnprocessableError>.Some(value), default);

    private static LinkDocumentToEpicError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value) =>
        _disabledFeatureErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetUnprocessableError([NotNullWhen(true)] out UnprocessableError? value) =>
        _unprocessableErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DisabledFeatureError, TResult> onDisabledFeatureError,
        Func<RawError, TResult> onNoContent,
        Func<UnprocessableError, TResult> onUnprocessableError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDisabledFeatureError(out var disabledFeatureErrorValue) => onDisabledFeatureError(
                disabledFeatureErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetUnprocessableError(out var unprocessableErrorValue) => onUnprocessableError(
                unprocessableErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(LinkDocumentToEpicError)} holds no value.")
        };

    public void Match(Action<DisabledFeatureError> onDisabledFeatureError,
        Action<RawError> onNoContent,
        Action<UnprocessableError> onUnprocessableError,
        Action<RawError> otherwise)
    {
        if (TryGetDisabledFeatureError(out var disabledFeatureErrorValue)) onDisabledFeatureError(
            disabledFeatureErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetUnprocessableError(out var unprocessableErrorValue)) onUnprocessableError(
            unprocessableErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(LinkDocumentToEpicError)} holds no value.");
    }

    private static Task<LinkDocumentToEpicError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 => response.RawBody().As(AsNoContent),
            403 => response.Json<DisabledFeatureError>().As(AsDisabledFeatureError),
            422 => response.Json<UnprocessableError>().As(AsUnprocessableError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<LinkDocumentToEpicError> Response { get; } = new(Create);
}
