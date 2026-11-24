using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class UpdateScimUserError : ApiError
{
    private readonly Optional<ScimError> _scimErrorValue;

    private UpdateScimUserError(Optional<ScimError> scimErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _scimErrorValue = scimErrorValue;
    }

    private static UpdateScimUserError AsScimError(ScimError value) => new(Optional<ScimError>.Some(value), default);

    private static UpdateScimUserError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetScimError([NotNullWhen(true)] out ScimError? value) => _scimErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ScimError, TResult> onScimError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetScimError(out var scimErrorValue) => onScimError(scimErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateScimUserError)} holds no value.")
        };

    public void Match(Action<ScimError> onScimError, Action<RawError> otherwise)
    {
        if (TryGetScimError(out var scimErrorValue)) onScimError(scimErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateScimUserError)} holds no value.");
    }

    private static Task<UpdateScimUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 => response.Json<ScimError>().As(AsScimError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateScimUserError> Response { get; } = new(Create);
}
