using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code1CloroDevMonitorApi>))]
public sealed record Code1CloroDevMonitorApi : OpenStringEnum<Code1CloroDevMonitorApi>
{
    private Code1CloroDevMonitorApi(string value) : base(value)
    {
    }

    public static readonly Code1CloroDevMonitorApi MissingApiKey = new("MISSING_API_KEY");

    public static readonly Code1CloroDevMonitorApi InvalidApiKeyFormat = new("INVALID_API_KEY_FORMAT");

    public static readonly Code1CloroDevMonitorApi InvalidOrExpiredApiKey = new("INVALID_OR_EXPIRED_API_KEY");

    public TResult Match<TResult>(Func<TResult> onMissingApiKey,
        Func<TResult> onInvalidApiKeyFormat,
        Func<TResult> onInvalidOrExpiredApiKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MissingApiKey => onMissingApiKey(),
            _ when this == InvalidApiKeyFormat => onInvalidApiKeyFormat(),
            _ when this == InvalidOrExpiredApiKey => onInvalidOrExpiredApiKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onMissingApiKey,
        Action onInvalidApiKeyFormat,
        Action onInvalidOrExpiredApiKey,
        Action<string> otherwise)
    {
        if (this == MissingApiKey) onMissingApiKey();
        else if (this == InvalidApiKeyFormat) onInvalidApiKeyFormat();
        else if (this == InvalidOrExpiredApiKey) onInvalidOrExpiredApiKey();
        else otherwise(Value);
    }
}
