using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResolutionDoiTCloudFlowApi>))]
public sealed record ResolutionDoiTCloudFlowApi : OpenStringEnum<ResolutionDoiTCloudFlowApi>
{
    private ResolutionDoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly ResolutionDoiTCloudFlowApi Bound = new("bound");

    public static readonly ResolutionDoiTCloudFlowApi Suggested = new("suggested");

    public static readonly ResolutionDoiTCloudFlowApi WillCreate = new("willCreate");

    public static readonly ResolutionDoiTCloudFlowApi Unbound = new("unbound");

    public TResult Match<TResult>(Func<TResult> onBound,
        Func<TResult> onSuggested,
        Func<TResult> onWillCreate,
        Func<TResult> onUnbound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bound => onBound(),
            _ when this == Suggested => onSuggested(),
            _ when this == WillCreate => onWillCreate(),
            _ when this == Unbound => onUnbound(),
            _ => otherwise(Value)
        };

    public void Match(Action onBound,
        Action onSuggested,
        Action onWillCreate,
        Action onUnbound,
        Action<string> otherwise)
    {
        if (this == Bound) onBound();
        else if (this == Suggested) onSuggested();
        else if (this == WillCreate) onWillCreate();
        else if (this == Unbound) onUnbound();
        else otherwise(Value);
    }
}
