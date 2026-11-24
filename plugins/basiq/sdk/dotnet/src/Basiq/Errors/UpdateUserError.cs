using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class UpdateUserError : ApiError
{
    private readonly Optional<Users400Error1> _users400Error1Value;

    private readonly Optional<Users401Error1> _users401Error1Value;

    private readonly Optional<Users403Error1> _users403Error1Value;

    private readonly Optional<Users404Error1> _users404Error1Value;

    private readonly Optional<Users500Error1> _users500Error1Value;

    private UpdateUserError(Optional<Users400Error1> users400Error1Value,
        Optional<Users401Error1> users401Error1Value,
        Optional<Users403Error1> users403Error1Value,
        Optional<Users404Error1> users404Error1Value,
        Optional<Users500Error1> users500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _users400Error1Value = users400Error1Value;
        _users401Error1Value = users401Error1Value;
        _users403Error1Value = users403Error1Value;
        _users404Error1Value = users404Error1Value;
        _users500Error1Value = users500Error1Value;
    }

    private static UpdateUserError AsUsers400Error1(Users400Error1 value) =>
        new(Optional<Users400Error1>.Some(value), default, default, default, default, default);

    private static UpdateUserError AsUsers401Error1(Users401Error1 value) =>
        new(default, Optional<Users401Error1>.Some(value), default, default, default, default);

    private static UpdateUserError AsUsers403Error1(Users403Error1 value) =>
        new(default, default, Optional<Users403Error1>.Some(value), default, default, default);

    private static UpdateUserError AsUsers404Error1(Users404Error1 value) =>
        new(default, default, default, Optional<Users404Error1>.Some(value), default, default);

    private static UpdateUserError AsUsers500Error1(Users500Error1 value) =>
        new(default, default, default, default, Optional<Users500Error1>.Some(value), default);

    private static UpdateUserError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsers400Error1([NotNullWhen(true)] out Users400Error1? value) =>
        _users400Error1Value.TryGetValue(out value);

    public bool TryGetUsers401Error1([NotNullWhen(true)] out Users401Error1? value) =>
        _users401Error1Value.TryGetValue(out value);

    public bool TryGetUsers403Error1([NotNullWhen(true)] out Users403Error1? value) =>
        _users403Error1Value.TryGetValue(out value);

    public bool TryGetUsers404Error1([NotNullWhen(true)] out Users404Error1? value) =>
        _users404Error1Value.TryGetValue(out value);

    public bool TryGetUsers500Error1([NotNullWhen(true)] out Users500Error1? value) =>
        _users500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Users400Error1, TResult> onUsers400Error1,
        Func<Users401Error1, TResult> onUsers401Error1,
        Func<Users403Error1, TResult> onUsers403Error1,
        Func<Users404Error1, TResult> onUsers404Error1,
        Func<Users500Error1, TResult> onUsers500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsers400Error1(out var users400Error1Value) => onUsers400Error1(users400Error1Value),
            _ when TryGetUsers401Error1(out var users401Error1Value) => onUsers401Error1(users401Error1Value),
            _ when TryGetUsers403Error1(out var users403Error1Value) => onUsers403Error1(users403Error1Value),
            _ when TryGetUsers404Error1(out var users404Error1Value) => onUsers404Error1(users404Error1Value),
            _ when TryGetUsers500Error1(out var users500Error1Value) => onUsers500Error1(users500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateUserError)} holds no value.")
        };

    public void Match(Action<Users400Error1> onUsers400Error1,
        Action<Users401Error1> onUsers401Error1,
        Action<Users403Error1> onUsers403Error1,
        Action<Users404Error1> onUsers404Error1,
        Action<Users500Error1> onUsers500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsers400Error1(out var users400Error1Value)) onUsers400Error1(users400Error1Value);
        else if (TryGetUsers401Error1(out var users401Error1Value)) onUsers401Error1(users401Error1Value);
        else if (TryGetUsers403Error1(out var users403Error1Value)) onUsers403Error1(users403Error1Value);
        else if (TryGetUsers404Error1(out var users404Error1Value)) onUsers404Error1(users404Error1Value);
        else if (TryGetUsers500Error1(out var users500Error1Value)) onUsers500Error1(users500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateUserError)} holds no value.");
    }

    private static Task<UpdateUserError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Users400Error1>().As(AsUsers400Error1),
            401 => response.Json<Users401Error1>().As(AsUsers401Error1),
            403 => response.Json<Users403Error1>().As(AsUsers403Error1),
            404 => response.Json<Users404Error1>().As(AsUsers404Error1),
            500 => response.Json<Users500Error1>().As(AsUsers500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateUserError> Response { get; } = new(Create);
}
