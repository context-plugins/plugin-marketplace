using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using JuriSign.Core.ErrorResponse;
using JuriSign.Core.Models;
using JuriSign.Models;

namespace JuriSign.Errors;

public sealed class CreateSignRequestError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<Unauthenticated1> _unauthenticated1Value;

    private readonly Optional<ValidationError1> _validationError1Value;

    private CreateSignRequestError(Optional<RawError> noContentValue,
        Optional<Unauthenticated1> unauthenticated1Value,
        Optional<ValidationError1> validationError1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _unauthenticated1Value = unauthenticated1Value;
        _validationError1Value = validationError1Value;
    }

    private static CreateSignRequestError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default, default);

    private static CreateSignRequestError AsUnauthenticated1(Unauthenticated1 value) =>
        new(default, Optional<Unauthenticated1>.Some(value), default, default);

    private static CreateSignRequestError AsValidationError1(ValidationError1 value) =>
        new(default, default, Optional<ValidationError1>.Some(value), default);

    private static CreateSignRequestError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetUnauthenticated1([NotNullWhen(true)] out Unauthenticated1? value) =>
        _unauthenticated1Value.TryGetValue(out value);

    public bool TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value) =>
        _validationError1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<Unauthenticated1, TResult> onUnauthenticated1,
        Func<ValidationError1, TResult> onValidationError1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetUnauthenticated1(out var unauthenticated1Value) => onUnauthenticated1(unauthenticated1Value),
            _ when TryGetValidationError1(out var validationError1Value) => onValidationError1(validationError1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateSignRequestError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<Unauthenticated1> onUnauthenticated1,
        Action<ValidationError1> onValidationError1,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetUnauthenticated1(out var unauthenticated1Value)) onUnauthenticated1(unauthenticated1Value);
        else if (TryGetValidationError1(out var validationError1Value)) onValidationError1(validationError1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateSignRequestError)} holds no value.");
    }

    private static Task<CreateSignRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Unauthenticated1>().As(AsUnauthenticated1),
            409 => response.RawBody().As(AsNoContent),
            422 => response.Json<ValidationError1>().As(AsValidationError1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateSignRequestError> Response { get; } = new(Create);
}
