using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class CreateScimUserError : ApiError
{
    private readonly Optional<ScimError> _scimErrorValue;

    private CreateScimUserError(Optional<ScimError> scimErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _scimErrorValue = scimErrorValue;
    }

    private static CreateScimUserError AsScimError(ScimError value) => new(Optional<ScimError>.Some(value), default);

    private static CreateScimUserError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetScimError([NotNullWhen(true)] out ScimError? value) => _scimErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ScimError, TResult> onScimError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetScimError(out var scimErrorValue) => onScimError(scimErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateScimUserError)} holds no value.")
        };

    public void Match(Action<ScimError> onScimError, Action<RawError> otherwise)
    {
        if (TryGetScimError(out var scimErrorValue)) onScimError(scimErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateScimUserError)} holds no value.");
    }

    private static Task<CreateScimUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 409 => response.Json<ScimError>().As(AsScimError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateScimUserError> Response { get; } = new(Create);
}
