using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoicesGetParametersStatus>))]
public sealed record InvoicesGetParametersStatus : OpenStringEnum<InvoicesGetParametersStatus>
{
    private InvoicesGetParametersStatus(string value) : base(value)
    {
    }

    public static readonly InvoicesGetParametersStatus Building = new("building");

    public static readonly InvoicesGetParametersStatus Draft = new("draft");

    public static readonly InvoicesGetParametersStatus Pending = new("pending");

    public static readonly InvoicesGetParametersStatus Posted = new("posted");

    public static readonly InvoicesGetParametersStatus Voided = new("voided");

    public static readonly InvoicesGetParametersStatus Canceled = new("canceled");

    public static readonly InvoicesGetParametersStatus Error = new("error");

    public TResult Match<TResult>(Func<TResult> onBuilding,
        Func<TResult> onDraft,
        Func<TResult> onPending,
        Func<TResult> onPosted,
        Func<TResult> onVoided,
        Func<TResult> onCanceled,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Building => onBuilding(),
            _ when this == Draft => onDraft(),
            _ when this == Pending => onPending(),
            _ when this == Posted => onPosted(),
            _ when this == Voided => onVoided(),
            _ when this == Canceled => onCanceled(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuilding,
        Action onDraft,
        Action onPending,
        Action onPosted,
        Action onVoided,
        Action onCanceled,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Building) onBuilding();
        else if (this == Draft) onDraft();
        else if (this == Pending) onPending();
        else if (this == Posted) onPosted();
        else if (this == Voided) onVoided();
        else if (this == Canceled) onCanceled();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
