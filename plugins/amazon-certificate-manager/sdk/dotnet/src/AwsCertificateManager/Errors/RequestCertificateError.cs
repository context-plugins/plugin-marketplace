using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsCertificateManager.Core.ErrorResponse;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Errors;

public sealed class RequestCertificateError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private RequestCertificateError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static RequestCertificateError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static RequestCertificateError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RequestCertificateError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RequestCertificateError)} holds no value.");
    }

    private static Task<RequestCertificateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RequestCertificateError> Response { get; } = new(Create);
}
