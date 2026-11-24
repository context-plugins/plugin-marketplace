using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Divvy.Core.ErrorResponse;
using Divvy.Core.Models;
using Divvy.Models;

namespace Divvy.Errors;

public sealed class CreateOrganizationUserError : ApiError
{
    private readonly Optional<IReadOnlyList<BdcError>> _listOfBdcErrorValue;

    private CreateOrganizationUserError(Optional<IReadOnlyList<BdcError>> listOfBdcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _listOfBdcErrorValue = listOfBdcErrorValue;
    }

    private static CreateOrganizationUserError AsListOfBdcError(IReadOnlyList<BdcError> value) =>
        new(Optional<IReadOnlyList<BdcError>>.Some(value), default);

    private static CreateOrganizationUserError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value) =>
        _listOfBdcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<BdcError>, TResult> onListOfBdcError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfBdcError(out var listOfBdcErrorValue) => onListOfBdcError(listOfBdcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateOrganizationUserError)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<BdcError>> onListOfBdcError, Action<RawError> otherwise)
    {
        if (TryGetListOfBdcError(out var listOfBdcErrorValue)) onListOfBdcError(listOfBdcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateOrganizationUserError)} holds no value.");
    }

    private static Task<CreateOrganizationUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            >= 500 and <= 599 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateOrganizationUserError> Response { get; } = new(Create);
}
