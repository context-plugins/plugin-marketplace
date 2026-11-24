using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class CreateSpaceGroupError : ApiError
{
    private readonly Optional<SpaceGroupCreate400Error1> _spaceGroupCreate400Error1Value;

    private CreateSpaceGroupError(Optional<SpaceGroupCreate400Error1> spaceGroupCreate400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _spaceGroupCreate400Error1Value = spaceGroupCreate400Error1Value;
    }

    private static CreateSpaceGroupError AsSpaceGroupCreate400Error1(SpaceGroupCreate400Error1 value) =>
        new(Optional<SpaceGroupCreate400Error1>.Some(value), default);

    private static CreateSpaceGroupError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetSpaceGroupCreate400Error1([NotNullWhen(true)] out SpaceGroupCreate400Error1? value) =>
        _spaceGroupCreate400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<SpaceGroupCreate400Error1, TResult> onSpaceGroupCreate400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSpaceGroupCreate400Error1(
                out var spaceGroupCreate400Error1Value) => onSpaceGroupCreate400Error1(spaceGroupCreate400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateSpaceGroupError)} holds no value.")
        };

    public void Match(Action<SpaceGroupCreate400Error1> onSpaceGroupCreate400Error1, Action<RawError> otherwise)
    {
        if (TryGetSpaceGroupCreate400Error1(out var spaceGroupCreate400Error1Value)) onSpaceGroupCreate400Error1(
            spaceGroupCreate400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateSpaceGroupError)} holds no value.");
    }

    private static Task<CreateSpaceGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<SpaceGroupCreate400Error1>().As(AsSpaceGroupCreate400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateSpaceGroupError> Response { get; } = new(Create);
}
