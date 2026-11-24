using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class ContactsIndexError : ApiError
{
    private readonly Optional<AuthorizationException1> _authorizationException1Value;

    private readonly Optional<ValidationException1> _validationException1Value;

    private ContactsIndexError(Optional<AuthorizationException1> authorizationException1Value,
        Optional<ValidationException1> validationException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _authorizationException1Value = authorizationException1Value;
        _validationException1Value = validationException1Value;
    }

    private static ContactsIndexError AsAuthorizationException1(AuthorizationException1 value) =>
        new(Optional<AuthorizationException1>.Some(value), default, default);

    private static ContactsIndexError AsValidationException1(ValidationException1 value) =>
        new(default, Optional<ValidationException1>.Some(value), default);

    private static ContactsIndexError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value) =>
        _authorizationException1Value.TryGetValue(out value);

    public bool TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value) =>
        _validationException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthorizationException1, TResult> onAuthorizationException1,
        Func<ValidationException1, TResult> onValidationException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthorizationException1(out var authorizationException1Value) => onAuthorizationException1(
                authorizationException1Value),
            _ when TryGetValidationException1(out var validationException1Value) => onValidationException1(
                validationException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ContactsIndexError)} holds no value.")
        };

    public void Match(Action<AuthorizationException1> onAuthorizationException1,
        Action<ValidationException1> onValidationException1,
        Action<RawError> otherwise)
    {
        if (TryGetAuthorizationException1(out var authorizationException1Value)) onAuthorizationException1(
            authorizationException1Value);
        else if (TryGetValidationException1(out var validationException1Value)) onValidationException1(
            validationException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ContactsIndexError)} holds no value.");
    }

    private static Task<ContactsIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<AuthorizationException1>().As(AsAuthorizationException1),
            422 => response.Json<ValidationException1>().As(AsValidationException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ContactsIndexError> Response { get; } = new(Create);
}
