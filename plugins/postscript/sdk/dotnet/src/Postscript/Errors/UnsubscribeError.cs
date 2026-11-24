using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class UnsubscribeError : ApiError
{
    private readonly Optional<ApiV2ComplianceUnsubscribe403Error1> _apiV2ComplianceUnsubscribe403Error1Value;

    private UnsubscribeError(Optional<ApiV2ComplianceUnsubscribe403Error1> apiV2ComplianceUnsubscribe403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2ComplianceUnsubscribe403Error1Value = apiV2ComplianceUnsubscribe403Error1Value;
    }

    private static UnsubscribeError AsApiV2ComplianceUnsubscribe403Error1(ApiV2ComplianceUnsubscribe403Error1 value) =>
        new(Optional<ApiV2ComplianceUnsubscribe403Error1>.Some(value), default);

    private static UnsubscribeError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2ComplianceUnsubscribe403Error1([NotNullWhen(true)] out ApiV2ComplianceUnsubscribe403Error1? value) =>
        _apiV2ComplianceUnsubscribe403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2ComplianceUnsubscribe403Error1, TResult> onApiV2ComplianceUnsubscribe403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2ComplianceUnsubscribe403Error1(
                out var apiV2ComplianceUnsubscribe403Error1Value) => onApiV2ComplianceUnsubscribe403Error1(
                apiV2ComplianceUnsubscribe403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UnsubscribeError)} holds no value.")
        };

    public void Match(Action<ApiV2ComplianceUnsubscribe403Error1> onApiV2ComplianceUnsubscribe403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2ComplianceUnsubscribe403Error1(
            out var apiV2ComplianceUnsubscribe403Error1Value)) onApiV2ComplianceUnsubscribe403Error1(
            apiV2ComplianceUnsubscribe403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UnsubscribeError)} holds no value.");
    }

    private static Task<UnsubscribeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV2ComplianceUnsubscribe403Error1>().As(AsApiV2ComplianceUnsubscribe403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UnsubscribeError> Response { get; } = new(Create);
}
