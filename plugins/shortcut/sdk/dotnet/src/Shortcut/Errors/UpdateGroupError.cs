using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class UpdateGroupError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<UnusableEntitlementError> _unusableEntitlementErrorValue;

    private UpdateGroupError(Optional<RawError> noContentValue,
        Optional<UnusableEntitlementError> unusableEntitlementErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _unusableEntitlementErrorValue = unusableEntitlementErrorValue;
    }

    private static UpdateGroupError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static UpdateGroupError AsUnusableEntitlementError(UnusableEntitlementError value) =>
        new(default, Optional<UnusableEntitlementError>.Some(value), default);

    private static UpdateGroupError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetUnusableEntitlementError([NotNullWhen(true)] out UnusableEntitlementError? value) =>
        _unusableEntitlementErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<UnusableEntitlementError, TResult> onUnusableEntitlementError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetUnusableEntitlementError(out var unusableEntitlementErrorValue) => onUnusableEntitlementError(
                unusableEntitlementErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateGroupError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<UnusableEntitlementError> onUnusableEntitlementError,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetUnusableEntitlementError(out var unusableEntitlementErrorValue)) onUnusableEntitlementError(
            unusableEntitlementErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateGroupError)} holds no value.");
    }

    private static Task<UpdateGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 422 => response.RawBody().As(AsNoContent),
            403 => response.Json<UnusableEntitlementError>().As(AsUnusableEntitlementError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateGroupError> Response { get; } = new(Create);
}
