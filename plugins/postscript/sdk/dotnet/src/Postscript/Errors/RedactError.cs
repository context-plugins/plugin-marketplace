using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class RedactError : ApiError
{
    private readonly Optional<ApiV2ComplianceRedact403Error1> _apiV2ComplianceRedact403Error1Value;

    private RedactError(Optional<ApiV2ComplianceRedact403Error1> apiV2ComplianceRedact403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2ComplianceRedact403Error1Value = apiV2ComplianceRedact403Error1Value;
    }

    private static RedactError AsApiV2ComplianceRedact403Error1(ApiV2ComplianceRedact403Error1 value) =>
        new(Optional<ApiV2ComplianceRedact403Error1>.Some(value), default);

    private static RedactError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2ComplianceRedact403Error1([NotNullWhen(true)] out ApiV2ComplianceRedact403Error1? value) =>
        _apiV2ComplianceRedact403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2ComplianceRedact403Error1, TResult> onApiV2ComplianceRedact403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2ComplianceRedact403Error1(
                out var apiV2ComplianceRedact403Error1Value) => onApiV2ComplianceRedact403Error1(
                apiV2ComplianceRedact403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RedactError)} holds no value.")
        };

    public void Match(Action<ApiV2ComplianceRedact403Error1> onApiV2ComplianceRedact403Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2ComplianceRedact403Error1(
            out var apiV2ComplianceRedact403Error1Value)) onApiV2ComplianceRedact403Error1(
            apiV2ComplianceRedact403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RedactError)} holds no value.");
    }

    private static Task<RedactError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV2ComplianceRedact403Error1>().As(AsApiV2ComplianceRedact403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RedactError> Response { get; } = new(Create);
}
