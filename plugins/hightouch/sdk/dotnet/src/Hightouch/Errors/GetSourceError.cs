using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;

namespace Hightouch.Errors;

public sealed class GetSourceError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private GetSourceError(Optional<RawError> noContentValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _validateErrorJsonValue = validateErrorJsonValue;
    }

    private static GetSourceError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default, default);

    private static GetSourceError AsValidateErrorJson(ValidateErrorJson value) =>
        new(default, Optional<ValidateErrorJson>.Some(value), default);

    private static GetSourceError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

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
            _ => throw new InvalidOperationException($"{nameof(GetSourceError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSourceError)} holds no value.");
    }

    private static Task<GetSourceError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.RawBody().As(AsNoContent),
            422 => response.Json<ValidateErrorJson>().As(AsValidateErrorJson),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSourceError> Response { get; } = new(Create);
}
