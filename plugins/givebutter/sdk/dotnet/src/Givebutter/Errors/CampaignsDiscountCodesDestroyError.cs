using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class CampaignsDiscountCodesDestroyError : ApiError
{
    private readonly Optional<AuthorizationException1> _authorizationException1Value;

    private readonly Optional<ModelNotFoundException1> _modelNotFoundException1Value;

    private readonly Optional<V1CampaignsDiscountCodes422Error1> _v1CampaignsDiscountCodes422Error1Value;

    private CampaignsDiscountCodesDestroyError(Optional<AuthorizationException1> authorizationException1Value,
        Optional<ModelNotFoundException1> modelNotFoundException1Value,
        Optional<V1CampaignsDiscountCodes422Error1> v1CampaignsDiscountCodes422Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _authorizationException1Value = authorizationException1Value;
        _modelNotFoundException1Value = modelNotFoundException1Value;
        _v1CampaignsDiscountCodes422Error1Value = v1CampaignsDiscountCodes422Error1Value;
    }

    private static CampaignsDiscountCodesDestroyError AsAuthorizationException1(AuthorizationException1 value) =>
        new(Optional<AuthorizationException1>.Some(value), default, default, default);

    private static CampaignsDiscountCodesDestroyError AsModelNotFoundException1(ModelNotFoundException1 value) =>
        new(default, Optional<ModelNotFoundException1>.Some(value), default, default);

    private static CampaignsDiscountCodesDestroyError AsV1CampaignsDiscountCodes422Error1(V1CampaignsDiscountCodes422Error1 value) =>
        new(default, default, Optional<V1CampaignsDiscountCodes422Error1>.Some(value), default);

    private static CampaignsDiscountCodesDestroyError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAuthorizationException1([NotNullWhen(true)] out AuthorizationException1? value) =>
        _authorizationException1Value.TryGetValue(out value);

    public bool TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value) =>
        _modelNotFoundException1Value.TryGetValue(out value);

    public bool TryGetV1CampaignsDiscountCodes422Error1([NotNullWhen(true)] out V1CampaignsDiscountCodes422Error1? value) =>
        _v1CampaignsDiscountCodes422Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthorizationException1, TResult> onAuthorizationException1,
        Func<ModelNotFoundException1, TResult> onModelNotFoundException1,
        Func<V1CampaignsDiscountCodes422Error1, TResult> onV1CampaignsDiscountCodes422Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthorizationException1(out var authorizationException1Value) => onAuthorizationException1(
                authorizationException1Value),
            _ when TryGetModelNotFoundException1(out var modelNotFoundException1Value) => onModelNotFoundException1(
                modelNotFoundException1Value),
            _ when TryGetV1CampaignsDiscountCodes422Error1(
                out var v1CampaignsDiscountCodes422Error1Value) => onV1CampaignsDiscountCodes422Error1(
                v1CampaignsDiscountCodes422Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CampaignsDiscountCodesDestroyError)} holds no value.")
        };

    public void Match(Action<AuthorizationException1> onAuthorizationException1,
        Action<ModelNotFoundException1> onModelNotFoundException1,
        Action<V1CampaignsDiscountCodes422Error1> onV1CampaignsDiscountCodes422Error1,
        Action<RawError> otherwise)
    {
        if (TryGetAuthorizationException1(out var authorizationException1Value)) onAuthorizationException1(
            authorizationException1Value);
        else if (TryGetModelNotFoundException1(out var modelNotFoundException1Value)) onModelNotFoundException1(
            modelNotFoundException1Value);
        else if (TryGetV1CampaignsDiscountCodes422Error1(
            out var v1CampaignsDiscountCodes422Error1Value)) onV1CampaignsDiscountCodes422Error1(
            v1CampaignsDiscountCodes422Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CampaignsDiscountCodesDestroyError)} holds no value.");
    }

    private static Task<CampaignsDiscountCodesDestroyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<AuthorizationException1>().As(AsAuthorizationException1),
            404 => response.Json<ModelNotFoundException1>().As(AsModelNotFoundException1),
            422 => response.Json<V1CampaignsDiscountCodes422Error1>().As(AsV1CampaignsDiscountCodes422Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CampaignsDiscountCodesDestroyError> Response { get; } = new(Create);
}
