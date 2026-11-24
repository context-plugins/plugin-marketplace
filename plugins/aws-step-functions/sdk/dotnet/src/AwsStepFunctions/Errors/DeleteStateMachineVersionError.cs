using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AwsStepFunctions.Core.ErrorResponse;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Errors;

public sealed class DeleteStateMachineVersionError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private DeleteStateMachineVersionError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static DeleteStateMachineVersionError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static DeleteStateMachineVersionError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteStateMachineVersionError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteStateMachineVersionError)} holds no value.");
    }

    private static Task<DeleteStateMachineVersionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 409 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteStateMachineVersionError> Response { get; } = new(Create);
}
