using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Airtable.Core.ErrorResponse;
using Airtable.Core.Models;
using Airtable.Models;

namespace Airtable.Errors;

public sealed class ListScimGroupsError : ApiError
{
    private readonly Optional<ScimError> _scimErrorValue;

    private ListScimGroupsError(Optional<ScimError> scimErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _scimErrorValue = scimErrorValue;
    }

    private static ListScimGroupsError AsScimError(ScimError value) => new(Optional<ScimError>.Some(value), default);

    private static ListScimGroupsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetScimError([NotNullWhen(true)] out ScimError? value) => _scimErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ScimError, TResult> onScimError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetScimError(out var scimErrorValue) => onScimError(scimErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListScimGroupsError)} holds no value.")
        };

    public void Match(Action<ScimError> onScimError, Action<RawError> otherwise)
    {
        if (TryGetScimError(out var scimErrorValue)) onScimError(scimErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListScimGroupsError)} holds no value.");
    }

    private static Task<ListScimGroupsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 429 => response.Json<ScimError>().As(AsScimError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListScimGroupsError> Response { get; } = new(Create);
}
