using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code NotFound = new("NOT_FOUND");

    public static readonly Code ComplianceRestricted = new("COMPLIANCE_RESTRICTED");

    public static readonly Code EnrichFailed = new("ENRICH_FAILED");

    public static readonly Code NoScore = new("NO_SCORE");

    public TResult Match<TResult>(Func<TResult> onNotFound,
        Func<TResult> onComplianceRestricted,
        Func<TResult> onEnrichFailed,
        Func<TResult> onNoScore,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotFound => onNotFound(),
            _ when this == ComplianceRestricted => onComplianceRestricted(),
            _ when this == EnrichFailed => onEnrichFailed(),
            _ when this == NoScore => onNoScore(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotFound,
        Action onComplianceRestricted,
        Action onEnrichFailed,
        Action onNoScore,
        Action<string> otherwise)
    {
        if (this == NotFound) onNotFound();
        else if (this == ComplianceRestricted) onComplianceRestricted();
        else if (this == EnrichFailed) onEnrichFailed();
        else if (this == NoScore) onNoScore();
        else otherwise(Value);
    }
}
