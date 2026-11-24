using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Issue type of the IPO. <c>regular</c> is a mainboard issue
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IssueType>))]
public sealed record IssueType : OpenStringEnum<IssueType>
{
    private IssueType(string value) : base(value)
    {
    }

    public static readonly IssueType Regular = new("regular");

    public static readonly IssueType Sme = new("sme");

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
