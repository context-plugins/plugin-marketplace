using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Archbee.Core.ErrorResponse;
using Archbee.Core.Models;
using Archbee.Models;

namespace Archbee.Errors;

public sealed class DeleteSpaceGroupError : ApiError
{
    private readonly Optional<SpaceGroupDelete400Error1> _spaceGroupDelete400Error1Value;

    private DeleteSpaceGroupError(Optional<SpaceGroupDelete400Error1> spaceGroupDelete400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _spaceGroupDelete400Error1Value = spaceGroupDelete400Error1Value;
    }

    private static DeleteSpaceGroupError AsSpaceGroupDelete400Error1(SpaceGroupDelete400Error1 value) =>
        new(Optional<SpaceGroupDelete400Error1>.Some(value), default);

    private static DeleteSpaceGroupError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetSpaceGroupDelete400Error1([NotNullWhen(true)] out SpaceGroupDelete400Error1? value) =>
        _spaceGroupDelete400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<SpaceGroupDelete400Error1, TResult> onSpaceGroupDelete400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSpaceGroupDelete400Error1(
                out var spaceGroupDelete400Error1Value) => onSpaceGroupDelete400Error1(spaceGroupDelete400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteSpaceGroupError)} holds no value.")
        };

    public void Match(Action<SpaceGroupDelete400Error1> onSpaceGroupDelete400Error1, Action<RawError> otherwise)
    {
        if (TryGetSpaceGroupDelete400Error1(out var spaceGroupDelete400Error1Value)) onSpaceGroupDelete400Error1(
            spaceGroupDelete400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteSpaceGroupError)} holds no value.");
    }

    private static Task<DeleteSpaceGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<SpaceGroupDelete400Error1>().As(AsSpaceGroupDelete400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteSpaceGroupError> Response { get; } = new(Create);
}
