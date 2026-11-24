using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Clix.Core.ErrorResponse;
using Clix.Core.Models;

namespace Clix.Errors;

public sealed class ClixExternalServiceUpdateUserError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<string> _stringValue;

    private ClixExternalServiceUpdateUserError(Optional<RawError> noContentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _stringValue = stringValue;
    }

    private static ClixExternalServiceUpdateUserError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static ClixExternalServiceUpdateUserError AsString(string value) =>
        new(default, Optional<string>.Some(value), default);

    private static ClixExternalServiceUpdateUserError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ClixExternalServiceUpdateUserError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ClixExternalServiceUpdateUserError)} holds no value.");
    }

    private static Task<ClixExternalServiceUpdateUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Scalar(s => s).As(AsString),
            404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ClixExternalServiceUpdateUserError> Response { get; } = new(Create);
}
