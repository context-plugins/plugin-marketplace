using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;

namespace Hightouch.Errors;

public sealed class TriggerRunCustomError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private TriggerRunCustomError(Optional<RawError> noContentValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _validateErrorJsonValue = validateErrorJsonValue;
    }

    private static TriggerRunCustomError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static TriggerRunCustomError AsValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default);

    private static TriggerRunCustomError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TriggerRunCustomError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TriggerRunCustomError)} holds no value.");
    }

    private static Task<TriggerRunCustomError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.RawBody().As(AsNoContent),
            422 => response.Json<ValidateErrorJson>().As(AsValidateErrorJson),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TriggerRunCustomError> Response { get; } = new(Create);
}
