using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Errors;

public sealed class DeleteSyncError : ApiError
{
    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private DeleteSyncError(Optional<InternalServerError> internalServerErrorValue,
        Optional<RawError> noContentValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerErrorValue = internalServerErrorValue;
        _noContentValue = noContentValue;
        _validateErrorJsonValue = validateErrorJsonValue;
    }

    private static DeleteSyncError AsInternalServerError(InternalServerError value) =>
        new(Optional<InternalServerError>.Some(value), default, default, default);

    private static DeleteSyncError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default);

    private static DeleteSyncError AsValidateErrorJson(ValidateErrorJson value) =>
        new(default, default, Optional<ValidateErrorJson>.Some(value), default);

    private static DeleteSyncError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerError, TResult> onInternalServerError,
        Func<RawError, TResult> onNoContent,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteSyncError)} holds no value.")
        };

    public void Match(Action<InternalServerError> onInternalServerError,
        Action<RawError> onNoContent,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteSyncError)} holds no value.");
    }

    private static Task<DeleteSyncError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.RawBody().As(AsNoContent),
            409 or 422 => response.Json<ValidateErrorJson>().As(AsValidateErrorJson),
            500 => response.Json<InternalServerError>().As(AsInternalServerError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteSyncError> Response { get; } = new(Create);
}
