using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class GetKeywordsError : ApiError
{
    private readonly Optional<ApiV2Keywords403Error1> _apiV2Keywords403Error1Value;

    private GetKeywordsError(Optional<ApiV2Keywords403Error1> apiV2Keywords403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Keywords403Error1Value = apiV2Keywords403Error1Value;
    }

    private static GetKeywordsError AsApiV2Keywords403Error1(ApiV2Keywords403Error1 value) =>
        new(Optional<ApiV2Keywords403Error1>.Some(value), default);

    private static GetKeywordsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Keywords403Error1([NotNullWhen(true)] out ApiV2Keywords403Error1? value) =>
        _apiV2Keywords403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Keywords403Error1, TResult> onApiV2Keywords403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Keywords403Error1(out var apiV2Keywords403Error1Value) => onApiV2Keywords403Error1(
                apiV2Keywords403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetKeywordsError)} holds no value.")
        };

    public void Match(Action<ApiV2Keywords403Error1> onApiV2Keywords403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Keywords403Error1(out var apiV2Keywords403Error1Value)) onApiV2Keywords403Error1(
            apiV2Keywords403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetKeywordsError)} holds no value.");
    }

    private static Task<GetKeywordsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV2Keywords403Error1>().As(AsApiV2Keywords403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetKeywordsError> Response { get; } = new(Create);
}
