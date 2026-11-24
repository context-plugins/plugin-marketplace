using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Published = new("published");

    public static readonly Status2 Updated = new("updated");

    public static readonly Status2 PendingApproval = new("pending_approval");

    public TResult Match<TResult>(Func<TResult> onPublished,
        Func<TResult> onUpdated,
        Func<TResult> onPendingApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Published => onPublished(),
            _ when this == Updated => onUpdated(),
            _ when this == PendingApproval => onPendingApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublished, Action onUpdated, Action onPendingApproval, Action<string> otherwise)
    {
        if (this == Published) onPublished();
        else if (this == Updated) onUpdated();
        else if (this == PendingApproval) onPendingApproval();
        else otherwise(Value);
    }
}
