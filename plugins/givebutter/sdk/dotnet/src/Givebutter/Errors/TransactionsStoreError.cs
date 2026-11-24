using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class TransactionsStoreError : ApiError
{
    private readonly Optional<AuthorizationException1> _authorizationException1Value;

    private readonly Optional<NotFoundHttpException1> _notFoundHttpException1Value;

    private readonly Optional<ValidationException1> _validationException1Value;

    private TransactionsStoreError(Optional<AuthorizationException1> authorizationException1Value,
        Optional<NotFoundHttpException1> notFoundHttpException1Value,
        Optional<ValidationException1> validationException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _authorizationException1Value = authorizationException1Value;
        _notFoundHttpException1Value = notFoundHttpException1Value;
        _validationException1Value = validationException1Value;
    }

    private static TransactionsStoreError AsAuthorizationException1(AuthorizationException1 value) =>
        new(Optional<AuthorizationException1>.Some(value), default, default, default);

    private static TransactionsStoreError AsNotFoundHttpException1(NotFoundHttpException1 value) =>
        new(default, Optional<NotFoundHttpException1>.Some(value), default, default);

    private static TransactionsStoreError AsValidationException1(ValidationException1 value) =>
        new(default, default, Optional<ValidationException1>.Some(value), default);

    private static TransactionsStoreError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value) =>
        _authorizationException1Value.TryGetValue(out value);

    public bool TryGetNotFoundHttpException1([NotNullWhen(true)] out NotFoundHttpException1? value) =>
        _notFoundHttpException1Value.TryGetValue(out value);

    public bool TryGetValidationException1([NotNullWhen(true)] out ValidationException1? value) =>
        _validationException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthorizationException1, TResult> onAuthorizationException1,
        Func<NotFoundHttpException1, TResult> onNotFoundHttpException1,
        Func<ValidationException1, TResult> onValidationException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthorizationException1(out var authorizationException1Value) => onAuthorizationException1(
                authorizationException1Value),
            _ when TryGetNotFoundHttpException1(out var notFoundHttpException1Value) => onNotFoundHttpException1(
                notFoundHttpException1Value),
            _ when TryGetValidationException1(out var validationException1Value) => onValidationException1(
                validationException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TransactionsStoreError)} holds no value.")
        };

    public void Match(Action<AuthorizationException1> onAuthorizationException1,
        Action<NotFoundHttpException1> onNotFoundHttpException1,
        Action<ValidationException1> onValidationException1,
        Action<RawError> otherwise)
    {
        if (TryGetAuthorizationException1(out var authorizationException1Value)) onAuthorizationException1(
            authorizationException1Value);
        else if (TryGetNotFoundHttpException1(out var notFoundHttpException1Value)) onNotFoundHttpException1(
            notFoundHttpException1Value);
        else if (TryGetValidationException1(out var validationException1Value)) onValidationException1(
            validationException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TransactionsStoreError)} holds no value.");
    }

    private static Task<TransactionsStoreError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<AuthorizationException1>().As(AsAuthorizationException1),
            404 => response.Json<NotFoundHttpException1>().As(AsNotFoundHttpException1),
            422 => response.Json<ValidationException1>().As(AsValidationException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TransactionsStoreError> Response { get; } = new(Create);
}
