using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayPlansApi>))]
public sealed record EntityRazorpayPlansApi : OpenStringEnum<EntityRazorpayPlansApi>
{
    private EntityRazorpayPlansApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayPlansApi Plan = new("plan");

    public TResult Match<TResult>(Func<TResult> onPlan, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Plan => onPlan(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlan, Action<string> otherwise)
    {
        if (this == Plan) onPlan();
        else otherwise(Value);
    }
}
