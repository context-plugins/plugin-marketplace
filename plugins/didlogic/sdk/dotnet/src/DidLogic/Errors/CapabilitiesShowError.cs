using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class CapabilitiesShowError : ApiError
{
    private readonly Optional<ApiV1Capabilities401Error1> _apiV1Capabilities401Error1Value;

    private CapabilitiesShowError(Optional<ApiV1Capabilities401Error1> apiV1Capabilities401Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Capabilities401Error1Value = apiV1Capabilities401Error1Value;
    }

    private static CapabilitiesShowError AsApiV1Capabilities401Error1(ApiV1Capabilities401Error1 value) =>
        new(Optional<ApiV1Capabilities401Error1>.Some(value), default);

    private static CapabilitiesShowError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Capabilities401Error1([NotNullWhen(true)] out ApiV1Capabilities401Error1? value) =>
        _apiV1Capabilities401Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Capabilities401Error1, TResult> onApiV1Capabilities401Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Capabilities401Error1(
                out var apiV1Capabilities401Error1Value) => onApiV1Capabilities401Error1(
                apiV1Capabilities401Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CapabilitiesShowError)} holds no value.")
        };

    public void Match(Action<ApiV1Capabilities401Error1> onApiV1Capabilities401Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1Capabilities401Error1(out var apiV1Capabilities401Error1Value)) onApiV1Capabilities401Error1(
            apiV1Capabilities401Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CapabilitiesShowError)} holds no value.");
    }

    private static Task<CapabilitiesShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV1Capabilities401Error1>().As(AsApiV1Capabilities401Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CapabilitiesShowError> Response { get; } = new(Create);
}
