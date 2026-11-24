using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetConnectionError : ApiError
{
    private readonly Optional<UsersConnections400Error1> _usersConnections400Error1Value;

    private readonly Optional<UsersConnections401Error1> _usersConnections401Error1Value;

    private readonly Optional<UsersConnections403Error1> _usersConnections403Error1Value;

    private readonly Optional<UsersConnections404Error1> _usersConnections404Error1Value;

    private readonly Optional<UsersConnections500Error1> _usersConnections500Error1Value;

    private readonly Optional<UsersConnections503Error1> _usersConnections503Error1Value;

    private GetConnectionError(Optional<UsersConnections400Error1> usersConnections400Error1Value,
        Optional<UsersConnections401Error1> usersConnections401Error1Value,
        Optional<UsersConnections403Error1> usersConnections403Error1Value,
        Optional<UsersConnections404Error1> usersConnections404Error1Value,
        Optional<UsersConnections500Error1> usersConnections500Error1Value,
        Optional<UsersConnections503Error1> usersConnections503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersConnections400Error1Value = usersConnections400Error1Value;
        _usersConnections401Error1Value = usersConnections401Error1Value;
        _usersConnections403Error1Value = usersConnections403Error1Value;
        _usersConnections404Error1Value = usersConnections404Error1Value;
        _usersConnections500Error1Value = usersConnections500Error1Value;
        _usersConnections503Error1Value = usersConnections503Error1Value;
    }

    private static GetConnectionError AsUsersConnections400Error1(UsersConnections400Error1 value) =>
        new(Optional<UsersConnections400Error1>.Some(value), default, default, default, default, default, default);

    private static GetConnectionError AsUsersConnections401Error1(UsersConnections401Error1 value) =>
        new(default, Optional<UsersConnections401Error1>.Some(value), default, default, default, default, default);

    private static GetConnectionError AsUsersConnections403Error1(UsersConnections403Error1 value) =>
        new(default, default, Optional<UsersConnections403Error1>.Some(value), default, default, default, default);

    private static GetConnectionError AsUsersConnections404Error1(UsersConnections404Error1 value) =>
        new(default, default, default, Optional<UsersConnections404Error1>.Some(value), default, default, default);

    private static GetConnectionError AsUsersConnections500Error1(UsersConnections500Error1 value) =>
        new(default, default, default, default, Optional<UsersConnections500Error1>.Some(value), default, default);

    private static GetConnectionError AsUsersConnections503Error1(UsersConnections503Error1 value) =>
        new(default, default, default, default, default, Optional<UsersConnections503Error1>.Some(value), default);

    private static GetConnectionError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersConnections400Error1([NotNullWhen(true)] out UsersConnections400Error1? value) =>
        _usersConnections400Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnections401Error1([NotNullWhen(true)] out UsersConnections401Error1? value) =>
        _usersConnections401Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnections403Error1([NotNullWhen(true)] out UsersConnections403Error1? value) =>
        _usersConnections403Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnections404Error1([NotNullWhen(true)] out UsersConnections404Error1? value) =>
        _usersConnections404Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnections500Error1([NotNullWhen(true)] out UsersConnections500Error1? value) =>
        _usersConnections500Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnections503Error1([NotNullWhen(true)] out UsersConnections503Error1? value) =>
        _usersConnections503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersConnections400Error1, TResult> onUsersConnections400Error1,
        Func<UsersConnections401Error1, TResult> onUsersConnections401Error1,
        Func<UsersConnections403Error1, TResult> onUsersConnections403Error1,
        Func<UsersConnections404Error1, TResult> onUsersConnections404Error1,
        Func<UsersConnections500Error1, TResult> onUsersConnections500Error1,
        Func<UsersConnections503Error1, TResult> onUsersConnections503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersConnections400Error1(
                out var usersConnections400Error1Value) => onUsersConnections400Error1(usersConnections400Error1Value),
            _ when TryGetUsersConnections401Error1(
                out var usersConnections401Error1Value) => onUsersConnections401Error1(usersConnections401Error1Value),
            _ when TryGetUsersConnections403Error1(
                out var usersConnections403Error1Value) => onUsersConnections403Error1(usersConnections403Error1Value),
            _ when TryGetUsersConnections404Error1(
                out var usersConnections404Error1Value) => onUsersConnections404Error1(usersConnections404Error1Value),
            _ when TryGetUsersConnections500Error1(
                out var usersConnections500Error1Value) => onUsersConnections500Error1(usersConnections500Error1Value),
            _ when TryGetUsersConnections503Error1(
                out var usersConnections503Error1Value) => onUsersConnections503Error1(usersConnections503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetConnectionError)} holds no value.")
        };

    public void Match(Action<UsersConnections400Error1> onUsersConnections400Error1,
        Action<UsersConnections401Error1> onUsersConnections401Error1,
        Action<UsersConnections403Error1> onUsersConnections403Error1,
        Action<UsersConnections404Error1> onUsersConnections404Error1,
        Action<UsersConnections500Error1> onUsersConnections500Error1,
        Action<UsersConnections503Error1> onUsersConnections503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersConnections400Error1(out var usersConnections400Error1Value)) onUsersConnections400Error1(
            usersConnections400Error1Value);
        else if (TryGetUsersConnections401Error1(out var usersConnections401Error1Value)) onUsersConnections401Error1(
            usersConnections401Error1Value);
        else if (TryGetUsersConnections403Error1(out var usersConnections403Error1Value)) onUsersConnections403Error1(
            usersConnections403Error1Value);
        else if (TryGetUsersConnections404Error1(out var usersConnections404Error1Value)) onUsersConnections404Error1(
            usersConnections404Error1Value);
        else if (TryGetUsersConnections500Error1(out var usersConnections500Error1Value)) onUsersConnections500Error1(
            usersConnections500Error1Value);
        else if (TryGetUsersConnections503Error1(out var usersConnections503Error1Value)) onUsersConnections503Error1(
            usersConnections503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetConnectionError)} holds no value.");
    }

    private static Task<GetConnectionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersConnections400Error1>().As(AsUsersConnections400Error1),
            401 => response.Json<UsersConnections401Error1>().As(AsUsersConnections401Error1),
            403 => response.Json<UsersConnections403Error1>().As(AsUsersConnections403Error1),
            404 => response.Json<UsersConnections404Error1>().As(AsUsersConnections404Error1),
            500 => response.Json<UsersConnections500Error1>().As(AsUsersConnections500Error1),
            503 => response.Json<UsersConnections503Error1>().As(AsUsersConnections503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetConnectionError> Response { get; } = new(Create);
}
