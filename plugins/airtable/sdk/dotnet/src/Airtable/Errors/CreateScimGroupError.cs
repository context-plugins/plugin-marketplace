using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Airtable.Core.ErrorResponse;
using Airtable.Core.Models;
using Airtable.Models;

namespace Airtable.Errors;

public sealed class CreateScimGroupError : ApiError
{
    private readonly Optional<ScimError> _scimErrorValue;

    private CreateScimGroupError(Optional<ScimError> scimErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _scimErrorValue = scimErrorValue;
    }

    private static CreateScimGroupError AsScimError(ScimError value) => new(Optional<ScimError>.Some(value), default);

    private static CreateScimGroupError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetScimError([NotNullWhen(true)] out ScimError? value) => _scimErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ScimError, TResult> onScimError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetScimError(out var scimErrorValue) => onScimError(scimErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateScimGroupError)} holds no value.")
        };

    public void Match(Action<ScimError> onScimError, Action<RawError> otherwise)
    {
        if (TryGetScimError(out var scimErrorValue)) onScimError(scimErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateScimGroupError)} holds no value.");
    }

    private static Task<CreateScimGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 409 or 429 => response.Json<ScimError>().As(AsScimError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateScimGroupError> Response { get; } = new(Create);
}
