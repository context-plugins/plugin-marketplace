using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bill.Core.ErrorResponse;
using Bill.Core.Models;
using Bill.Models;

namespace Bill.Errors;

public sealed class UpdateClassificationDepartmentError : ApiError
{
    private readonly Optional<IReadOnlyList<BdcError>> _listOfBdcErrorValue;

    private UpdateClassificationDepartmentError(Optional<IReadOnlyList<BdcError>> listOfBdcErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _listOfBdcErrorValue = listOfBdcErrorValue;
    }

    private static UpdateClassificationDepartmentError AsListOfBdcError(IReadOnlyList<BdcError> value) =>
        new(Optional<IReadOnlyList<BdcError>>.Some(value), default);

    private static UpdateClassificationDepartmentError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value) =>
        _listOfBdcErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<BdcError>, TResult> onListOfBdcError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfBdcError(out var listOfBdcErrorValue) => onListOfBdcError(listOfBdcErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateClassificationDepartmentError)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<BdcError>> onListOfBdcError, Action<RawError> otherwise)
    {
        if (TryGetListOfBdcError(out var listOfBdcErrorValue)) onListOfBdcError(listOfBdcErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateClassificationDepartmentError)} holds no value.");
    }

    private static Task<UpdateClassificationDepartmentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            >= 400 and <= 499 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            >= 500 and <= 599 => response.Json<IReadOnlyList<BdcError>>().As(AsListOfBdcError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateClassificationDepartmentError> Response { get; } = new(Create);
}
