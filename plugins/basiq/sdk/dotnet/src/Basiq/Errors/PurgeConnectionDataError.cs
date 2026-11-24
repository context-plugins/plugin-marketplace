using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class PurgeConnectionDataError : ApiError
{
    private readonly Optional<UsersConnectionsPurge400Error1> _usersConnectionsPurge400Error1Value;

    private readonly Optional<UsersConnectionsPurge403Error1> _usersConnectionsPurge403Error1Value;

    private readonly Optional<UsersConnectionsPurge404Error1> _usersConnectionsPurge404Error1Value;

    private readonly Optional<UsersConnectionsPurge500Error1> _usersConnectionsPurge500Error1Value;

    private readonly Optional<UsersConnectionsPurge503Error1> _usersConnectionsPurge503Error1Value;

    private PurgeConnectionDataError(Optional<UsersConnectionsPurge400Error1> usersConnectionsPurge400Error1Value,
        Optional<UsersConnectionsPurge403Error1> usersConnectionsPurge403Error1Value,
        Optional<UsersConnectionsPurge404Error1> usersConnectionsPurge404Error1Value,
        Optional<UsersConnectionsPurge500Error1> usersConnectionsPurge500Error1Value,
        Optional<UsersConnectionsPurge503Error1> usersConnectionsPurge503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersConnectionsPurge400Error1Value = usersConnectionsPurge400Error1Value;
        _usersConnectionsPurge403Error1Value = usersConnectionsPurge403Error1Value;
        _usersConnectionsPurge404Error1Value = usersConnectionsPurge404Error1Value;
        _usersConnectionsPurge500Error1Value = usersConnectionsPurge500Error1Value;
        _usersConnectionsPurge503Error1Value = usersConnectionsPurge503Error1Value;
    }

    private static PurgeConnectionDataError AsUsersConnectionsPurge400Error1(UsersConnectionsPurge400Error1 value) =>
        new(Optional<UsersConnectionsPurge400Error1>.Some(value), default, default, default, default, default);

    private static PurgeConnectionDataError AsUsersConnectionsPurge403Error1(UsersConnectionsPurge403Error1 value) =>
        new(default, Optional<UsersConnectionsPurge403Error1>.Some(value), default, default, default, default);

    private static PurgeConnectionDataError AsUsersConnectionsPurge404Error1(UsersConnectionsPurge404Error1 value) =>
        new(default, default, Optional<UsersConnectionsPurge404Error1>.Some(value), default, default, default);

    private static PurgeConnectionDataError AsUsersConnectionsPurge500Error1(UsersConnectionsPurge500Error1 value) =>
        new(default, default, default, Optional<UsersConnectionsPurge500Error1>.Some(value), default, default);

    private static PurgeConnectionDataError AsUsersConnectionsPurge503Error1(UsersConnectionsPurge503Error1 value) =>
        new(default, default, default, default, Optional<UsersConnectionsPurge503Error1>.Some(value), default);

    private static PurgeConnectionDataError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersConnectionsPurge400Error1([NotNullWhen(true)] out UsersConnectionsPurge400Error1? value) =>
        _usersConnectionsPurge400Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsPurge403Error1([NotNullWhen(true)] out UsersConnectionsPurge403Error1? value) =>
        _usersConnectionsPurge403Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsPurge404Error1([NotNullWhen(true)] out UsersConnectionsPurge404Error1? value) =>
        _usersConnectionsPurge404Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsPurge500Error1([NotNullWhen(true)] out UsersConnectionsPurge500Error1? value) =>
        _usersConnectionsPurge500Error1Value.TryGetValue(out value);

    public bool TryGetUsersConnectionsPurge503Error1([NotNullWhen(true)] out UsersConnectionsPurge503Error1? value) =>
        _usersConnectionsPurge503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersConnectionsPurge400Error1, TResult> onUsersConnectionsPurge400Error1,
        Func<UsersConnectionsPurge403Error1, TResult> onUsersConnectionsPurge403Error1,
        Func<UsersConnectionsPurge404Error1, TResult> onUsersConnectionsPurge404Error1,
        Func<UsersConnectionsPurge500Error1, TResult> onUsersConnectionsPurge500Error1,
        Func<UsersConnectionsPurge503Error1, TResult> onUsersConnectionsPurge503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersConnectionsPurge400Error1(
                out var usersConnectionsPurge400Error1Value) => onUsersConnectionsPurge400Error1(
                usersConnectionsPurge400Error1Value),
            _ when TryGetUsersConnectionsPurge403Error1(
                out var usersConnectionsPurge403Error1Value) => onUsersConnectionsPurge403Error1(
                usersConnectionsPurge403Error1Value),
            _ when TryGetUsersConnectionsPurge404Error1(
                out var usersConnectionsPurge404Error1Value) => onUsersConnectionsPurge404Error1(
                usersConnectionsPurge404Error1Value),
            _ when TryGetUsersConnectionsPurge500Error1(
                out var usersConnectionsPurge500Error1Value) => onUsersConnectionsPurge500Error1(
                usersConnectionsPurge500Error1Value),
            _ when TryGetUsersConnectionsPurge503Error1(
                out var usersConnectionsPurge503Error1Value) => onUsersConnectionsPurge503Error1(
                usersConnectionsPurge503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PurgeConnectionDataError)} holds no value.")
        };

    public void Match(Action<UsersConnectionsPurge400Error1> onUsersConnectionsPurge400Error1,
        Action<UsersConnectionsPurge403Error1> onUsersConnectionsPurge403Error1,
        Action<UsersConnectionsPurge404Error1> onUsersConnectionsPurge404Error1,
        Action<UsersConnectionsPurge500Error1> onUsersConnectionsPurge500Error1,
        Action<UsersConnectionsPurge503Error1> onUsersConnectionsPurge503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersConnectionsPurge400Error1(
            out var usersConnectionsPurge400Error1Value)) onUsersConnectionsPurge400Error1(
            usersConnectionsPurge400Error1Value);
        else if (TryGetUsersConnectionsPurge403Error1(
            out var usersConnectionsPurge403Error1Value)) onUsersConnectionsPurge403Error1(
            usersConnectionsPurge403Error1Value);
        else if (TryGetUsersConnectionsPurge404Error1(
            out var usersConnectionsPurge404Error1Value)) onUsersConnectionsPurge404Error1(
            usersConnectionsPurge404Error1Value);
        else if (TryGetUsersConnectionsPurge500Error1(
            out var usersConnectionsPurge500Error1Value)) onUsersConnectionsPurge500Error1(
            usersConnectionsPurge500Error1Value);
        else if (TryGetUsersConnectionsPurge503Error1(
            out var usersConnectionsPurge503Error1Value)) onUsersConnectionsPurge503Error1(
            usersConnectionsPurge503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PurgeConnectionDataError)} holds no value.");
    }

    private static Task<PurgeConnectionDataError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersConnectionsPurge400Error1>().As(AsUsersConnectionsPurge400Error1),
            403 => response.Json<UsersConnectionsPurge403Error1>().As(AsUsersConnectionsPurge403Error1),
            404 => response.Json<UsersConnectionsPurge404Error1>().As(AsUsersConnectionsPurge404Error1),
            500 => response.Json<UsersConnectionsPurge500Error1>().As(AsUsersConnectionsPurge500Error1),
            503 => response.Json<UsersConnectionsPurge503Error1>().As(AsUsersConnectionsPurge503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PurgeConnectionDataError> Response { get; } = new(Create);
}
