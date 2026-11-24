using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Errors;

public sealed class RunFlowError : ApiError
{
    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private RunFlowError(Optional<InternalServerError> internalServerErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerErrorValue = internalServerErrorValue;
        _noContentValue = noContentValue;
    }

    private static RunFlowError AsInternalServerError(InternalServerError value) =>
        new(Optional<InternalServerError>.Some(value), default, default);

    private static RunFlowError AsNoContent(RawError value) => new(default, Optional<RawError>.Some(value), default);

    private static RunFlowError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerError, TResult> onInternalServerError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RunFlowError)} holds no value.")
        };

    public void Match(Action<InternalServerError> onInternalServerError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RunFlowError)} holds no value.");
    }

    private static Task<RunFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 => response.RawBody().As(AsNoContent),
            500 => response.Json<InternalServerError>().As(AsInternalServerError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RunFlowError> Response { get; } = new(Create);
}
