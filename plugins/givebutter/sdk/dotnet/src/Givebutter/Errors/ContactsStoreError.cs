using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class ContactsStoreError : ApiError
{
    private readonly Optional<ValidationException1> _validationException1Value;

    private ContactsStoreError(Optional<ValidationException1> validationException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _validationException1Value = validationException1Value;
    }

    private static ContactsStoreError AsValidationException1(ValidationException1 value) =>
        new(Optional<ValidationException1>.Some(value), default);

    private static ContactsStoreError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value) =>
        _validationException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ValidationException1, TResult> onValidationException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetValidationException1(out var validationException1Value) => onValidationException1(
                validationException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ContactsStoreError)} holds no value.")
        };

    public void Match(Action<ValidationException1> onValidationException1, Action<RawError> otherwise)
    {
        if (TryGetValidationException1(out var validationException1Value)) onValidationException1(
            validationException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ContactsStoreError)} holds no value.");
    }

    private static Task<ContactsStoreError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            422 => response.Json<ValidationException1>().As(AsValidationException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ContactsStoreError> Response { get; } = new(Create);
}
