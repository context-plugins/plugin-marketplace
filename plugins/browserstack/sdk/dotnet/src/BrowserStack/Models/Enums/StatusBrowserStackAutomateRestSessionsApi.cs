using System;
using System.Text.Json.Serialization;
using BrowserStack.Core.Enum;

namespace BrowserStack.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusBrowserStackAutomateRestSessionsApi>))]
public sealed record StatusBrowserStackAutomateRestSessionsApi : OpenStringEnum<StatusBrowserStackAutomateRestSessionsApi>
{
    private StatusBrowserStackAutomateRestSessionsApi(string value) : base(value)
    {
    }

    public static readonly StatusBrowserStackAutomateRestSessionsApi Passed = new("passed");

    public static readonly StatusBrowserStackAutomateRestSessionsApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPassed, Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Passed => onPassed(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassed, Action onFailed, Action<string> otherwise)
    {
        if (this == Passed) onPassed();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
