using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class IdentitiesIndexError : ApiError
{
    private readonly Optional<ApiV2Identities401Error1> _apiV2Identities401Error1Value;

    private IdentitiesIndexError(Optional<ApiV2Identities401Error1> apiV2Identities401Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Identities401Error1Value = apiV2Identities401Error1Value;
    }

    private static IdentitiesIndexError AsApiV2Identities401Error1(ApiV2Identities401Error1 value) =>
        new(Optional<ApiV2Identities401Error1>.Some(value), default);

    private static IdentitiesIndexError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Identities401Error1([NotNullWhen(true)] out ApiV2Identities401Error1? value) =>
        _apiV2Identities401Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Identities401Error1, TResult> onApiV2Identities401Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Identities401Error1(out var apiV2Identities401Error1Value) => onApiV2Identities401Error1(
                apiV2Identities401Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(IdentitiesIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2Identities401Error1> onApiV2Identities401Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Identities401Error1(out var apiV2Identities401Error1Value)) onApiV2Identities401Error1(
            apiV2Identities401Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(IdentitiesIndexError)} holds no value.");
    }

    private static Task<IdentitiesIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Identities401Error1>().As(AsApiV2Identities401Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<IdentitiesIndexError> Response { get; } = new(Create);
}
