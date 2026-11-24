using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class RequestMagicLinkAccessError : ApiError
{
    private readonly Optional<AccessControlRequest400Error1> _accessControlRequest400Error1Value;

    private RequestMagicLinkAccessError(Optional<AccessControlRequest400Error1> accessControlRequest400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _accessControlRequest400Error1Value = accessControlRequest400Error1Value;
    }

    private static RequestMagicLinkAccessError AsAccessControlRequest400Error1(AccessControlRequest400Error1 value) =>
        new(Optional<AccessControlRequest400Error1>.Some(value), default);

    private static RequestMagicLinkAccessError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetAccessControlRequest400Error1([NotNullWhen(true)] out AccessControlRequest400Error1? value) =>
        _accessControlRequest400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AccessControlRequest400Error1, TResult> onAccessControlRequest400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAccessControlRequest400Error1(
                out var accessControlRequest400Error1Value) => onAccessControlRequest400Error1(
                accessControlRequest400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RequestMagicLinkAccessError)} holds no value.")
        };

    public void Match(Action<AccessControlRequest400Error1> onAccessControlRequest400Error1, Action<RawError> otherwise)
    {
        if (TryGetAccessControlRequest400Error1(
            out var accessControlRequest400Error1Value)) onAccessControlRequest400Error1(
            accessControlRequest400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RequestMagicLinkAccessError)} holds no value.");
    }

    private static Task<RequestMagicLinkAccessError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<AccessControlRequest400Error1>().As(AsAccessControlRequest400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RequestMagicLinkAccessError> Response { get; } = new(Create);
}
