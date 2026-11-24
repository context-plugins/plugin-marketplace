using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IssueType3>))]
public sealed record IssueType3 : OpenStringEnum<IssueType3>
{
    private IssueType3(string value) : base(value)
    {
    }

    public static readonly IssueType3 Regular = new("regular");

    public static readonly IssueType3 Sme = new("sme");

    public TResult Match<TResult>(Func<TResult> onRegular, Func<TResult> onSme, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Regular => onRegular(),
            _ when this == Sme => onSme(),
            _ => otherwise(Value)
        };

    public void Match(Action onRegular, Action onSme, Action<string> otherwise)
    {
        if (this == Regular) onRegular();
        else if (this == Sme) onSme();
        else otherwise(Value);
    }
}
