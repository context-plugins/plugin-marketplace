using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class IdentitiesDestroyError : ApiError
{
    private readonly Optional<ApiV2Identities401Error1> _apiV2Identities401Error1Value;

    private readonly Optional<ApiV2Identities404Error1> _apiV2Identities404Error1Value;

    private readonly Optional<ApiV2Identities422Error1> _apiV2Identities422Error1Value;

    private IdentitiesDestroyError(Optional<ApiV2Identities401Error1> apiV2Identities401Error1Value,
        Optional<ApiV2Identities404Error1> apiV2Identities404Error1Value,
        Optional<ApiV2Identities422Error1> apiV2Identities422Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Identities401Error1Value = apiV2Identities401Error1Value;
        _apiV2Identities404Error1Value = apiV2Identities404Error1Value;
        _apiV2Identities422Error1Value = apiV2Identities422Error1Value;
    }

    private static IdentitiesDestroyError AsApiV2Identities401Error1(ApiV2Identities401Error1 value) =>
        new(Optional<ApiV2Identities401Error1>.Some(value), default, default, default);

    private static IdentitiesDestroyError AsApiV2Identities404Error1(ApiV2Identities404Error1 value) =>
        new(default, Optional<ApiV2Identities404Error1>.Some(value), default, default);

    private static IdentitiesDestroyError AsApiV2Identities422Error1(ApiV2Identities422Error1 value) =>
        new(default, default, Optional<ApiV2Identities422Error1>.Some(value), default);

    private static IdentitiesDestroyError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Identities401Error1([NotNullWhen(true)] out ApiV2Identities401Error1? value) =>
        _apiV2Identities401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2Identities404Error1([NotNullWhen(true)] out ApiV2Identities404Error1? value) =>
        _apiV2Identities404Error1Value.TryGetValue(out value);

    public bool TryGetApiV2Identities422Error1([NotNullWhen(true)] out ApiV2Identities422Error1? value) =>
        _apiV2Identities422Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Identities401Error1, TResult> onApiV2Identities401Error1,
        Func<ApiV2Identities404Error1, TResult> onApiV2Identities404Error1,
        Func<ApiV2Identities422Error1, TResult> onApiV2Identities422Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Identities401Error1(out var apiV2Identities401Error1Value) => onApiV2Identities401Error1(
                apiV2Identities401Error1Value),
            _ when TryGetApiV2Identities404Error1(out var apiV2Identities404Error1Value) => onApiV2Identities404Error1(
                apiV2Identities404Error1Value),
            _ when TryGetApiV2Identities422Error1(out var apiV2Identities422Error1Value) => onApiV2Identities422Error1(
                apiV2Identities422Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(IdentitiesDestroyError)} holds no value.")
        };

    public void Match(Action<ApiV2Identities401Error1> onApiV2Identities401Error1,
        Action<ApiV2Identities404Error1> onApiV2Identities404Error1,
        Action<ApiV2Identities422Error1> onApiV2Identities422Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2Identities401Error1(out var apiV2Identities401Error1Value)) onApiV2Identities401Error1(
            apiV2Identities401Error1Value);
        else if (TryGetApiV2Identities404Error1(out var apiV2Identities404Error1Value)) onApiV2Identities404Error1(
            apiV2Identities404Error1Value);
        else if (TryGetApiV2Identities422Error1(out var apiV2Identities422Error1Value)) onApiV2Identities422Error1(
            apiV2Identities422Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(IdentitiesDestroyError)} holds no value.");
    }

    private static Task<IdentitiesDestroyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Identities401Error1>().As(AsApiV2Identities401Error1),
            404 => response.Json<ApiV2Identities404Error1>().As(AsApiV2Identities404Error1),
            422 => response.Json<ApiV2Identities422Error1>().As(AsApiV2Identities422Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<IdentitiesDestroyError> Response { get; } = new(Create);
}
