using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetEventsError : ApiError
{
    private readonly Optional<Events400Error1> _events400Error1Value;

    private readonly Optional<Events401Error1> _events401Error1Value;

    private readonly Optional<Events403Error1> _events403Error1Value;

    private readonly Optional<Events404Error1> _events404Error1Value;

    private readonly Optional<Events500Error1> _events500Error1Value;

    private readonly Optional<Events503Error1> _events503Error1Value;

    private GetEventsError(Optional<Events400Error1> events400Error1Value,
        Optional<Events401Error1> events401Error1Value,
        Optional<Events403Error1> events403Error1Value,
        Optional<Events404Error1> events404Error1Value,
        Optional<Events500Error1> events500Error1Value,
        Optional<Events503Error1> events503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _events400Error1Value = events400Error1Value;
        _events401Error1Value = events401Error1Value;
        _events403Error1Value = events403Error1Value;
        _events404Error1Value = events404Error1Value;
        _events500Error1Value = events500Error1Value;
        _events503Error1Value = events503Error1Value;
    }

    private static GetEventsError AsEvents400Error1(Events400Error1 value) =>
        new(Optional<Events400Error1>.Some(value), default, default, default, default, default, default);

    private static GetEventsError AsEvents401Error1(Events401Error1 value) =>
        new(default, Optional<Events401Error1>.Some(value), default, default, default, default, default);

    private static GetEventsError AsEvents403Error1(Events403Error1 value) =>
        new(default, default, Optional<Events403Error1>.Some(value), default, default, default, default);

    private static GetEventsError AsEvents404Error1(Events404Error1 value) =>
        new(default, default, default, Optional<Events404Error1>.Some(value), default, default, default);

    private static GetEventsError AsEvents500Error1(Events500Error1 value) =>
        new(default, default, default, default, Optional<Events500Error1>.Some(value), default, default);

    private static GetEventsError AsEvents503Error1(Events503Error1 value) =>
        new(default, default, default, default, default, Optional<Events503Error1>.Some(value), default);

    private static GetEventsError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetEvents400Error1([NotNullWhen(true)] out Events400Error1? value) =>
        _events400Error1Value.TryGetValue(out value);

    public bool TryGetEvents401Error1([NotNullWhen(true)] out Events401Error1? value) =>
        _events401Error1Value.TryGetValue(out value);

    public bool TryGetEvents403Error1([NotNullWhen(true)] out Events403Error1? value) =>
        _events403Error1Value.TryGetValue(out value);

    public bool TryGetEvents404Error1([NotNullWhen(true)] out Events404Error1? value) =>
        _events404Error1Value.TryGetValue(out value);

    public bool TryGetEvents500Error1([NotNullWhen(true)] out Events500Error1? value) =>
        _events500Error1Value.TryGetValue(out value);

    public bool TryGetEvents503Error1([NotNullWhen(true)] out Events503Error1? value) =>
        _events503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Events400Error1, TResult> onEvents400Error1,
        Func<Events401Error1, TResult> onEvents401Error1,
        Func<Events403Error1, TResult> onEvents403Error1,
        Func<Events404Error1, TResult> onEvents404Error1,
        Func<Events500Error1, TResult> onEvents500Error1,
        Func<Events503Error1, TResult> onEvents503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEvents400Error1(out var events400Error1Value) => onEvents400Error1(events400Error1Value),
            _ when TryGetEvents401Error1(out var events401Error1Value) => onEvents401Error1(events401Error1Value),
            _ when TryGetEvents403Error1(out var events403Error1Value) => onEvents403Error1(events403Error1Value),
            _ when TryGetEvents404Error1(out var events404Error1Value) => onEvents404Error1(events404Error1Value),
            _ when TryGetEvents500Error1(out var events500Error1Value) => onEvents500Error1(events500Error1Value),
            _ when TryGetEvents503Error1(out var events503Error1Value) => onEvents503Error1(events503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetEventsError)} holds no value.")
        };

    public void Match(Action<Events400Error1> onEvents400Error1,
        Action<Events401Error1> onEvents401Error1,
        Action<Events403Error1> onEvents403Error1,
        Action<Events404Error1> onEvents404Error1,
        Action<Events500Error1> onEvents500Error1,
        Action<Events503Error1> onEvents503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetEvents400Error1(out var events400Error1Value)) onEvents400Error1(events400Error1Value);
        else if (TryGetEvents401Error1(out var events401Error1Value)) onEvents401Error1(events401Error1Value);
        else if (TryGetEvents403Error1(out var events403Error1Value)) onEvents403Error1(events403Error1Value);
        else if (TryGetEvents404Error1(out var events404Error1Value)) onEvents404Error1(events404Error1Value);
        else if (TryGetEvents500Error1(out var events500Error1Value)) onEvents500Error1(events500Error1Value);
        else if (TryGetEvents503Error1(out var events503Error1Value)) onEvents503Error1(events503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetEventsError)} holds no value.");
    }

    private static Task<GetEventsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Events400Error1>().As(AsEvents400Error1),
            401 => response.Json<Events401Error1>().As(AsEvents401Error1),
            403 => response.Json<Events403Error1>().As(AsEvents403Error1),
            404 => response.Json<Events404Error1>().As(AsEvents404Error1),
            500 => response.Json<Events500Error1>().As(AsEvents500Error1),
            503 => response.Json<Events503Error1>().As(AsEvents503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetEventsError> Response { get; } = new(Create);
}
