using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Models.Enums;

namespace Hightouch.Errors;

public sealed class CreateSignupError : ApiError
{
    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<SignupErrorResponse> _signupErrorResponseValue;

    private readonly Optional<SignupsResponse1> _signupsResponse1Value;

    private CreateSignupError(Optional<InternalServerError> internalServerErrorValue,
        Optional<RawError> noContentValue,
        Optional<SignupErrorResponse> signupErrorResponseValue,
        Optional<SignupsResponse1> signupsResponse1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerErrorValue = internalServerErrorValue;
        _noContentValue = noContentValue;
        _signupErrorResponseValue = signupErrorResponseValue;
        _signupsResponse1Value = signupsResponse1Value;
    }

    private static CreateSignupError AsInternalServerError(InternalServerError value) =>
        new(Optional<InternalServerError>.Some(value), default, default, default, default);

    private static CreateSignupError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default, default);

    private static CreateSignupError AsSignupErrorResponse(SignupErrorResponse value) =>
        new(default, default, Optional<SignupErrorResponse>.Some(value), default, default);

    private static CreateSignupError AsSignupsResponse1(SignupsResponse1 value) =>
        new(default, default, default, Optional<SignupsResponse1>.Some(value), default);

    private static CreateSignupError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetSignupErrorResponse([NotNullWhen(true)] out SignupErrorResponse? value) =>
        _signupErrorResponseValue.TryGetValue(out value);

    public bool TryGetSignupsResponse1([NotNullWhen(true)] out SignupsResponse1? value) =>
        _signupsResponse1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerError, TResult> onInternalServerError,
        Func<RawError, TResult> onNoContent,
        Func<SignupErrorResponse, TResult> onSignupErrorResponse,
        Func<SignupsResponse1, TResult> onSignupsResponse1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetSignupErrorResponse(out var signupErrorResponseValue) => onSignupErrorResponse(
                signupErrorResponseValue),
            _ when TryGetSignupsResponse1(out var signupsResponse1Value) => onSignupsResponse1(signupsResponse1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateSignupError)} holds no value.")
        };

    public void Match(Action<InternalServerError> onInternalServerError,
        Action<RawError> onNoContent,
        Action<SignupErrorResponse> onSignupErrorResponse,
        Action<SignupsResponse1> onSignupsResponse1,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetSignupErrorResponse(out var signupErrorResponseValue)) onSignupErrorResponse(
            signupErrorResponseValue);
        else if (TryGetSignupsResponse1(out var signupsResponse1Value)) onSignupsResponse1(signupsResponse1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateSignupError)} holds no value.");
    }

    private static Task<CreateSignupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 409 or 502 => response.Json<SignupErrorResponse>().As(AsSignupErrorResponse),
            401 or 403 => response.RawBody().As(AsNoContent),
            422 => response.Json<SignupsResponse1>().As(AsSignupsResponse1),
            500 => response.Json<InternalServerError>().As(AsInternalServerError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateSignupError> Response { get; } = new(Create);
}
