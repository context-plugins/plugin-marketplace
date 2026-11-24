using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class HouseholdsContactsDestroyError : ApiError
{
    private readonly Optional<AuthorizationException1> _authorizationException1Value;

    private readonly Optional<ModelNotFoundException1> _modelNotFoundException1Value;

    private HouseholdsContactsDestroyError(Optional<AuthorizationException1> authorizationException1Value,
        Optional<ModelNotFoundException1> modelNotFoundException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _authorizationException1Value = authorizationException1Value;
        _modelNotFoundException1Value = modelNotFoundException1Value;
    }

    private static HouseholdsContactsDestroyError AsAuthorizationException1(AuthorizationException1 value) =>
        new(Optional<AuthorizationException1>.Some(value), default, default);

    private static HouseholdsContactsDestroyError AsModelNotFoundException1(ModelNotFoundException1 value) =>
        new(default, Optional<ModelNotFoundException1>.Some(value), default);

    private static HouseholdsContactsDestroyError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value) =>
        _authorizationException1Value.TryGetValue(out value);

    public bool TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value) =>
        _modelNotFoundException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthorizationException1, TResult> onAuthorizationException1,
        Func<ModelNotFoundException1, TResult> onModelNotFoundException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthorizationException1(out var authorizationException1Value) => onAuthorizationException1(
                authorizationException1Value),
            _ when TryGetModelNotFoundException1(out var modelNotFoundException1Value) => onModelNotFoundException1(
                modelNotFoundException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(HouseholdsContactsDestroyError)} holds no value.")
        };

    public void Match(Action<AuthorizationException1> onAuthorizationException1,
        Action<ModelNotFoundException1> onModelNotFoundException1,
        Action<RawError> otherwise)
    {
        if (TryGetAuthorizationException1(out var authorizationException1Value)) onAuthorizationException1(
            authorizationException1Value);
        else if (TryGetModelNotFoundException1(out var modelNotFoundException1Value)) onModelNotFoundException1(
            modelNotFoundException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(HouseholdsContactsDestroyError)} holds no value.");
    }

    private static Task<HouseholdsContactsDestroyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<AuthorizationException1>().As(AsAuthorizationException1),
            404 => response.Json<ModelNotFoundException1>().As(AsModelNotFoundException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<HouseholdsContactsDestroyError> Response { get; } = new(Create);
}
