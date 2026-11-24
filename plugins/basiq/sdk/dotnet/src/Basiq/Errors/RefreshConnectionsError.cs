using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class RefreshConnectionsError : ApiError
{
    private readonly Optional<UsersConnectionsRefresh400Error1> _usersConnectionsRefresh400Error1Value;

    private readonly Optional<UsersConnectionsRefresh403Error1> _usersConnectionsRefresh403Error1Value;

    private readonly Optional<UsersConnectionsRefresh404Error1> _usersConnectionsRefresh404Error1Value;

    private readonly Optional<UsersConnectionsRefresh500Error1> _usersConnectionsRefresh500Error1Value;

    private RefreshConnectionsError(Optional<UsersConnectionsRefresh400Error1> usersConnectionsRefresh400Error1Value,
        Optional<UsersConnectionsRefresh403Error1> usersConnectionsRefresh403Error1Value,
        Optional<UsersConnectionsRefresh404Error1> usersConnectionsRefresh404Error1Value,
        Optional<UsersConnectionsRefresh500Error1> usersConnectionsRefresh500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersConnectionsRefresh400Error1Value = usersConnectionsRefresh400Error1Value;
        _usersConnectionsRefresh403Error1Value = usersConnectionsRefresh403Error1Value;
        _usersConnectionsRefresh404Error1Value = usersConnectionsRefresh404Error1Value;
        _usersConnectionsRefresh500Error1Value = usersConnectionsRefresh500Error1Value;
    }

    private static RefreshConnectionsError AsUsersConnectionsRefresh400Error1(UsersConnectionsRefresh400Error1 value) =>
        new(Optional<UsersConnectionsRefresh400Error1>.Some(value), default, default, default, default);

    private static RefreshConnectionsError AsUsersConnectionsRefresh403Error1(UsersConnectionsRefresh403Error1 value) =>
        new(default, Optional<UsersConnectionsRefresh403Error1>.Some(value), default, default, default);

    private static RefreshConnectionsError AsUsersConnectionsRefresh404Error1(UsersConnectionsRefresh404Error1 value) =>
        new(default, default, Optional<UsersConnectionsRefresh404Error1>.Some(value), default, default);

    private static RefreshConnectionsError AsUsersConnectionsRefresh500Error1(UsersConnectionsRefresh500Error1 value) =>
        new(default, default, default, Optional<UsersConnectionsRefresh500Error1>.Some(value), default);

    private static RefreshConnectionsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersConnectionsRefresh400Error1([NotNullWhen(true)] out UsersConnectionsRefresh400Error1? value) =>
        _usersConnectionsRefresh400Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsRefresh403Error1([NotNullWhen(true)] out UsersConnectionsRefresh403Error1? value) =>
        _usersConnectionsRefresh403Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsRefresh404Error1([NotNullWhen(true)] out UsersConnectionsRefresh404Error1? value) =>
        _usersConnectionsRefresh404Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsRefresh500Error1([NotNullWhen(true)] out UsersConnectionsRefresh500Error1? value) =>
        _usersConnectionsRefresh500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersConnectionsRefresh400Error1, TResult> onUsersConnectionsRefresh400Error1,
        Func<UsersConnectionsRefresh403Error1, TResult> onUsersConnectionsRefresh403Error1,
        Func<UsersConnectionsRefresh404Error1, TResult> onUsersConnectionsRefresh404Error1,
        Func<UsersConnectionsRefresh500Error1, TResult> onUsersConnectionsRefresh500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersConnectionsRefresh400Error1(
                out var usersConnectionsRefresh400Error1Value) => onUsersConnectionsRefresh400Error1(
                usersConnectionsRefresh400Error1Value),
            _ when TryGetUsersConnectionsRefresh403Error1(
                out var usersConnectionsRefresh403Error1Value) => onUsersConnectionsRefresh403Error1(
                usersConnectionsRefresh403Error1Value),
            _ when TryGetUsersConnectionsRefresh404Error1(
                out var usersConnectionsRefresh404Error1Value) => onUsersConnectionsRefresh404Error1(
                usersConnectionsRefresh404Error1Value),
            _ when TryGetUsersConnectionsRefresh500Error1(
                out var usersConnectionsRefresh500Error1Value) => onUsersConnectionsRefresh500Error1(
                usersConnectionsRefresh500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RefreshConnectionsError)} holds no value.")
        };

    public void Match(Action<UsersConnectionsRefresh400Error1> onUsersConnectionsRefresh400Error1,
        Action<UsersConnectionsRefresh403Error1> onUsersConnectionsRefresh403Error1,
        Action<UsersConnectionsRefresh404Error1> onUsersConnectionsRefresh404Error1,
        Action<UsersConnectionsRefresh500Error1> onUsersConnectionsRefresh500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersConnectionsRefresh400Error1(
            out var usersConnectionsRefresh400Error1Value)) onUsersConnectionsRefresh400Error1(
            usersConnectionsRefresh400Error1Value);
        else if (TryGetUsersConnectionsRefresh403Error1(
            out var usersConnectionsRefresh403Error1Value)) onUsersConnectionsRefresh403Error1(
            usersConnectionsRefresh403Error1Value);
        else if (TryGetUsersConnectionsRefresh404Error1(
            out var usersConnectionsRefresh404Error1Value)) onUsersConnectionsRefresh404Error1(
            usersConnectionsRefresh404Error1Value);
        else if (TryGetUsersConnectionsRefresh500Error1(
            out var usersConnectionsRefresh500Error1Value)) onUsersConnectionsRefresh500Error1(
            usersConnectionsRefresh500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RefreshConnectionsError)} holds no value.");
    }

    private static Task<RefreshConnectionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersConnectionsRefresh400Error1>().As(AsUsersConnectionsRefresh400Error1),
            403 => response.Json<UsersConnectionsRefresh403Error1>().As(AsUsersConnectionsRefresh403Error1),
            404 => response.Json<UsersConnectionsRefresh404Error1>().As(AsUsersConnectionsRefresh404Error1),
            500 => response.Json<UsersConnectionsRefresh500Error1>().As(AsUsersConnectionsRefresh500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RefreshConnectionsError> Response { get; } = new(Create);
}
