using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Instacart.Core.ErrorResponse;
using Instacart.Core.Models;
using Instacart.Models;

namespace Instacart.Errors;

public sealed class CreateShoppingListPageError : ApiError
{
    private readonly Optional<Error2> _error2Value;

    private CreateShoppingListPageError(Optional<Error2> error2Value, Optional<RawError> fallback) : base(fallback)
    {
        _error2Value = error2Value;
    }

    private static CreateShoppingListPageError AsError2(Error2 value) => new(Optional<Error2>.Some(value), default);

    private static CreateShoppingListPageError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError2([NotNullWhen(true)] out Error2? value) => _error2Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error2, TResult> onError2, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError2(out var error2Value) => onError2(error2Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateShoppingListPageError)} holds no value.")
        };

    public void Match(Action<Error2> onError2, Action<RawError> otherwise)
    {
        if (TryGetError2(out var error2Value)) onError2(error2Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateShoppingListPageError)} holds no value.");
    }

    private static Task<CreateShoppingListPageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 429 => response.Json<Error2>().As(AsError2),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateShoppingListPageError> Response { get; } = new(Create);
}
